import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://et-nat.com"),
  title: "Tamir Natanov — Software Engineer III",
  description:
    "Frontend-focused software engineer building resilient product systems, reusable architecture, and safer paths to production.",
  applicationName: "Tamir Natanov",
  authors: [{ name: "Tamir Natanov" }],
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
  themeColor: "#07100f",
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
