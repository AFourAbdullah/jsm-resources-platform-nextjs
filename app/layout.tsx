import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSM",
  description: "JSM RESOURCES",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black-100 font-poppins min-h-screen">{children}</body>
    </html>
  );
}
