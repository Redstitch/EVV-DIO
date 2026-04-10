import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Catholic Diocese of Evansville — The Catholic Church in Southwestern Indiana",
    template: "%s | Diocese of Evansville",
  },
  description:
    "The Catholic Diocese of Evansville serves 79,500 Catholics across 45 parishes, 26 schools, and 12 counties in Southwestern Indiana. Encounter. Deepen. Engage.",
  keywords: [
    "Diocese of Evansville",
    "Catholic",
    "Southwestern Indiana",
    "Catholic Church",
    "parishes",
    "Catholic schools",
    "Bishop Siegel",
  ],
  openGraph: {
    title: "Catholic Diocese of Evansville",
    description:
      "The Catholic Church in Southwestern Indiana — 45 parishes, 26 schools, 12 counties.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${libreFranklin.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
