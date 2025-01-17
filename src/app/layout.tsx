import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GN - Detailer",
  description: "Portifólio profissional, detail, PPF, Treinamento para polidores, Treinamento para Vendedores, Treinamento para PPF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
