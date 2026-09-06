import type { Metadata, Viewport } from "next";
import { portfolioContent } from "@/lib/content";
import "./globals.css";

const { meta, identity } = portfolioContent.site;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.title,
  description: meta.description,
  applicationName: identity.name,
  authors: [{ name: identity.name }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon-new.svg",
    shortcut: "/favicon-new.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: meta.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
