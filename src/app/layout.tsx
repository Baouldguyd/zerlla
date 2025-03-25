import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Zerlla",
  description: "Smartest way to buy and sell",
  icons: "../../public/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
