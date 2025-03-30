import type { Metadata } from "next";
import { Alexandria, PT_Serif } from "next/font/google";
import { GlobalStyles } from "./globals";

const alexandria = Alexandria ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--alexandria",
});
const pt_serif = PT_Serif({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Káča fotí",
  description: "Jmenuji se Káča a vítám vás na mém kreativním kousku internetu",
  openGraph: {
    title: "Káča fotí",
    description:
      "Jmenuji se Káča a vítám vás na mém kreativním kousku internetu",
    url: "https://kacafoti.cz",
    type: "website",
    images: [
      {
        url: "https://kacafoti.cz/web.png",
        width: 800,
        height: 600,
        alt: "Náhled stránky Káča fotí",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <GlobalStyles />
      <body className={`${pt_serif.className} ${alexandria.variable}`}>
        {children}
      </body>
    </html>
  );
}
