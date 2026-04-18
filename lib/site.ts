import { basePath } from "@/lib/base-path";

/** Volledige naam — gebruikt in SEO (Google) en op de pagina. */
export const SITE_OWNER_FULL_NAME = "Hodaifa Ben Yamaan";

/**
 * Handles en zoektermen die mensen gebruiken (Google / social).
 * Pas aan als je andere @-naam gebruikt.
 */
export const SITE_SEO_ALIASES = [
  "ibenyamaan",
  "ibenyamaan.edit",
  "ben yamaan edit",
  "Ben Yamaan edit",
  "hodaifa ben yamaan edit",
] as const;

/** Keywords voor <meta name="keywords"> — export voor layout. */
export const SITE_SEO_KEYWORDS = [
  SITE_OWNER_FULL_NAME,
  "Ben Yamaan",
  "Hodaifa",
  ...SITE_SEO_ALIASES,
  "video-editor",
  "video editing",
  "montage",
  "Nederland",
  "freelance",
];

/** Publieke URL van de site (GitHub Pages + base path). */
export const SITE_ORIGIN = "https://hodaifamahria33-ui.github.io";
export const publicSiteUrl =
  basePath === "" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${basePath}/`;

/** Wijzig hier je contact-e-mail — overal op de site wordt dit gebruikt. */
export const CONTACT_EMAIL = "hodaifamahria33@gmail.com";

export function mailtoSubject(subject: string) {
  const q = encodeURIComponent(subject);
  return `mailto:${CONTACT_EMAIL}?subject=${q}`;
}
