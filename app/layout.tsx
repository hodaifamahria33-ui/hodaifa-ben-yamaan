import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
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
  title: "Hodaifa — Video-editing en montage (Nederland)",
  description:
    "Freelance video-editor in Nederland: social clips, YouTube en campagnes. Strakke montage, kleur en ritme — remote of op locatie.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title: "Hodaifa — Video-editing en montage",
    description:
      "Professionele montage voor creators en merken in Nederland. Social, YouTube, ads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className={`${dm.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
