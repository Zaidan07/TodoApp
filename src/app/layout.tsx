import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "My Personal Todo List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#333333" />
      <body
        className={`${poppins.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
