import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Zerlla",
  description: "Smartest way to buy and sell",
  icons: "../../public/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
