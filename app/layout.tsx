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
  title: "Nahima Toumi Développeuse Web",
  description: "Développeuse Junior PortFolio",
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
