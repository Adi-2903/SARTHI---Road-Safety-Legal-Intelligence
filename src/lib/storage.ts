import { get, set, del } from "idb-keyval";

export type SavedChallan = {
  id: string;
  state: string;
  vehicle: string;
  section: string;
  amount: number;
  officer: string;
  date: string;
  audit?: { ok: boolean; checks: Record<string, { pass: boolean; note: string }> };
  createdAt: number;
};

export type Citizen = { name: string; address: string; phone: string };
export type Contact = { id: string; name: string; phone: string; relation?: string };

const K = {
  challans: "sarthi:challans",
  citizen: "sarthi:citizen",
  contacts: "sarthi:contacts",
  letters: "sarthi:letters",
};

export async function listChallans(): Promise<SavedChallan[]> {
  return (await get(K.challans)) ?? [];
}
export async function saveChallan(c: SavedChallan) {
  const list = await listChallans();
  await set(K.challans, [c, ...list]);
}
export async function deleteChallan(id: string) {
  const list = await listChallans();
  await set(K.challans, list.filter((c) => c.id !== id));
}

export async function getCitizen(): Promise<Citizen> {
  return (await get(K.citizen)) ?? { name: "", address: "", phone: "" };
}
export async function setCitizen(c: Citizen) {
  await set(K.citizen, c);
}

export async function listContacts(): Promise<Contact[]> {
  return (await get(K.contacts)) ?? [];
}
export async function setContacts(list: Contact[]) {
  await set(K.contacts, list);
}

export async function rememberLetter(id: string) {
  const list: string[] = (await get(K.letters)) ?? [];
  if (!list.includes(id)) await set(K.letters, [id, ...list]);
}

export async function clearAll() {
  await Promise.all([del(K.challans), del(K.citizen), del(K.contacts), del(K.letters)]);
}
