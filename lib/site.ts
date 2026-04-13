/** Wijzig hier je contact-e-mail — overal op de site wordt dit gebruikt. */
export const CONTACT_EMAIL = "hodaifamahria33@gmail.com";

export function mailtoSubject(subject: string) {
  const q = encodeURIComponent(subject);
  return `mailto:${CONTACT_EMAIL}?subject=${q}`;
}
