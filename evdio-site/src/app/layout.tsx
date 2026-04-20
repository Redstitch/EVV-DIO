import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Catholic Diocese of Evansville — The Catholic Church in Southwestern Indiana",
    template: "%s | Diocese of Evansville",
  },
  description:
    "The Catholic Diocese of Evansville serves 79,500 Catholics across 45 parishes, 26 schools, and 12 counties in Southwestern Indiana.",
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
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${bodoniModa.variable}`}
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
