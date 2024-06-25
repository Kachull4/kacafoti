import type { Metadata } from "next";
import { Pacifico, Roboto } from "next/font/google";
import { GlobalStyles } from "./globals";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--pacifico",
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Káča fotí",
  description: "Created by Kateřina Beranová",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <GlobalStyles />
      <body className={`${roboto.className} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
