import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
