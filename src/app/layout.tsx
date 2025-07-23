import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { DebugToggle } from "@/lib/debug";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FiveTwentyFour Studios - B2B Marketing Agency",
  description: "We build high-performing marketing engines for B2B brands that generate pipeline and improve marketing ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
        <DebugToggle />
      </body>
    </html>
  );
}
