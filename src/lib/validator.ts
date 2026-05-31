import { findViolationBySection, getRank, lookupFine, statutoryDeadlineDays } from "./calculator";

export type AuditInput = {
  state: string;
  vehicle: string;
  section: string;
  amount: number;
  officer: string;
  date: string; // ISO
};

export type CheckResult = { pass: boolean; note: string };
export type AuditReport = {
  ok: boolean;
  checks: {
    amount: CheckResult;
    section: CheckResult;
    compound: CheckResult;
    timebar: CheckResult;
    authority: CheckResult;
  };
};

export function runAudit(input: AuditInput): AuditReport {
  const v = findViolationBySection(input.section);
  const expected = v ? lookupFine(v.id, input.state, input.vehicle) : null;
  const rank = getRank(input.officer);

  const sectionCheck: CheckResult = v
    ? { pass: true, note: `Section ${input.section} — ${v.label}.` }
    : { pass: false, note: `Section ${input.section} not recognised in our gazette database.` };

  const amountCheck: CheckResult =
    expected == null
      ? { pass: false, note: "No gazette amount on file for this combination." }
      : input.amount === expected
        ? { pass: true, note: `Matches gazette: ₹${expected}.` }
        : { pass: false, note: `Gazette amount is ₹${expected}; challan shows ₹${input.amount}.` };

  const compoundCheck: CheckResult = v
    ? v.compoundable
      ? { pass: true, note: "Compoundable — can be paid or contested." }
      : { pass: true, note: "Non-compoundable — must go to court." }
    : { pass: false, note: "Cannot verify compoundability for unknown section." };

  const days = Math.floor((Date.now() - new Date(input.date).getTime()) / (1000 * 60 * 60 * 24));
  const deadline = statutoryDeadlineDays();
  const timebar: CheckResult = isNaN(days)
    ? { pass: false, note: "Issue date missing or invalid." }
    : days <= deadline
      ? { pass: true, note: `Within ${deadline}-day statutory window (${deadline - days} days remaining).` }
      : { pass: false, note: `Time-barred: issued ${days} days ago (limit ${deadline}).` };

  const authority: CheckResult = !rank
    ? { pass: false, note: "Officer rank not recognised." }
    : v && !v.compoundable
      ? { pass: false, note: `${rank.label} cannot issue spot fines for non-compoundable section ${input.section}.` }
      : input.amount <= rank.max_fine
        ? { pass: true, note: `${rank.label} is authorised up to ₹${rank.max_fine}.` }
        : { pass: false, note: `${rank.label} authorised only up to ₹${rank.max_fine} — issued ₹${input.amount}.` };

  const checks = { amount: amountCheck, section: sectionCheck, compound: compoundCheck, timebar, authority };
  const ok = Object.values(checks).every((c) => c.pass);
  return { ok, checks };
}
