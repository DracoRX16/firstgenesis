import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FirstGenesis",
  description: "Created by DracoRX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MainLayout>{children}</MainLayout></body>
    </html>
  );
}
