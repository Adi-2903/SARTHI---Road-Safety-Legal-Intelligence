import fineTable from "@/data/fine_table.json";
import authority from "@/data/authority_matrix.json";

export type Violation = (typeof fineTable.violations)[number];

export function getStates() {
  return fineTable.states;
}
export function getVehicles() {
  return fineTable.vehicle_classes;
}
export function getViolationsFor(state: string, vehicle: string) {
  return fineTable.violations.filter(
    (v) => v.fines?.[vehicle as keyof typeof v.fines]?.[state as never] != null,
  ) as Violation[];
}
export function lookupFine(violationId: string, state: string, vehicle: string): number | null {
  const v = fineTable.violations.find((x) => x.id === violationId);
  if (!v) return null;
  const byV = v.fines?.[vehicle as keyof typeof v.fines] as Record<string, number> | undefined;
  return byV?.[state] ?? null;
}
export function findViolation(id: string) {
  return fineTable.violations.find((v) => v.id === id);
}
export function findViolationBySection(section: string) {
  return fineTable.violations.find((v) => v.section === section);
}
export function getRanks() {
  return authority.ranks;
}
export function getRank(code: string) {
  return authority.ranks.find((r) => r.code === code);
}
export function statutoryDeadlineDays() {
  return fineTable.statutory_deadline_days;
}

export function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}
