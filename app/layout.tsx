import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import "./leaflet-custom.css";

export const metadata: Metadata = {
  title: "Blockwave Africa — Ride the Future",
  description:
    "Blockwave Africa empowers Africans with blockchain education, collaboration and real-world application.",
  keywords: [
    "Blockchain",
    "Africa",
    "education",
    "Web3",
    "blockchain workshops",
    "Blockwave",
  ],
  openGraph: {
    title: "Blockwave Africa — Ride the Future",
    description:
      "Empowering Africans to build, learn and lead in the blockchain economy.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Blockwave",
            "url": "",
            "logo": "",
            "description": "Blockwave empowers individuals and communities in Africa through blockchain education, collaboration, and applied innovation."
          }
        `}</Script>
      </body>
    </html>
  );
}
