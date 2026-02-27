import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./_components/Header";
import PageTransitionEffect from "./PageTransitionEffect";
import "@fontsource/nunito-sans"; 
import "@fontsource/nunito-sans/400.css"; 
import "@fontsource/nunito-sans/700.css"; 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nahima Toumi | Architecte Logiciel & Développeuse Fullstack",
  description: "Portfolio de Nahima Toumi, Architecte Logiciel spécialisée en Java, Spring Boot, Angular et React. Découvrez mes projets, mon parcours et mon expertise en conception d'architectures robustes.",
  keywords: [
    "Nahima Toumi",
    "Architecte Logiciel",
    "Développeuse Fullstack",
    "Java",
    "Spring Boot",
    "Angular",
    "Next.js",
    "Développeuse Web",
    "Portfolio"
  ],
  authors: [{ name: "Nahima Toumi" }],
  creator: "Nahima Toumi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ton-lien-vercel.vercel.app", 
    title: "Nahima Toumi | Architecte Logiciel",
    description: "Découvrez mon portfolio, mes projets (Spring Boot, Angular, Next.js) et mon parcours d'Architecte Logiciel.",
    siteName: "Portfolio Nahima Toumi",
    images: [
      {
        url: "https://ton-lien-vercel.vercel.app/assets/projets/portfolio.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio Nahima Toumi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable}    "font-sans-h-full bg-background text-foreground" antialiased`}     
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <Header/>
        <PageTransitionEffect>{children}</PageTransitionEffect>;
      </body>
    </html>
  );
}
