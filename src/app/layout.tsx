import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naija Japa Postgresql App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
