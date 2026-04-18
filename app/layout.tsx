import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { basePath } from "@/lib/base-path";
import {
  CONTACT_EMAIL,
  publicSiteUrl,
  SITE_OWNER_FULL_NAME,
  SITE_SEO_KEYWORDS,
} from "@/lib/site";
import "./globals.css";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hodaifamahria33-ui.github.io"),
  title: `${SITE_OWNER_FULL_NAME} — Video-editing en montage (Nederland)`,
  description: `${SITE_OWNER_FULL_NAME} — freelance video-editor (Ben Yamaan edit, ibenyamaan, ibenyamaan.edit) in Nederland: social clips, YouTube en campagnes. Strakke montage, kleur en ritme — remote of op locatie.`,
  keywords: [...SITE_SEO_KEYWORDS],
  alternates: {
    canonical: publicSiteUrl,
  },
  icons: {
    icon: `${basePath || ""}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: publicSiteUrl,
    title: `${SITE_OWNER_FULL_NAME} — Video-editing en montage`,
    description: `${SITE_OWNER_FULL_NAME} — video editing & montage voor creators en merken. Ook: Ben Yamaan edit, ibenyamaan, ibenyamaan.edit.`,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_OWNER_FULL_NAME,
  alternateName: ["ibenyamaan", "ibenyamaan.edit", "Ben Yamaan"],
  url: publicSiteUrl,
  jobTitle: "Video-editor",
  knowsAbout: ["Video editing", "Montage", "Ben Yamaan edit"],
  email: CONTACT_EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className={`${dm.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
