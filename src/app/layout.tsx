import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const source = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "KILR",
  description: "Kalinga Indigenous Language Repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source.className}>{children}</body>
    </html>
  );
}
