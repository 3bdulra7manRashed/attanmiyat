import type { Metadata } from "next";
import { siteMetadata } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: [
      { url: siteMetadata.favicon32, sizes: "32x32", type: "image/png" },
      { url: siteMetadata.favicon192, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: siteMetadata.favicon192, sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
