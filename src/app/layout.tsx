import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ProviderContainer from "@/provider/ProviderContainer";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Store API",
  description: "Generated by APIXCEL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <ProviderContainer>
          <Header />
          {children}
          <Footer />
        </ProviderContainer>
      </body>
    </html>
  );
}
