import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Background from "./background"
import Navbar from "./navbar"

export const metadata: Metadata = {
  title: "Milan Hommet",
  description: "Portfolio Milan Hommet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Background />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          {children}
          </div>
      </body>
    </html>
  );
}
