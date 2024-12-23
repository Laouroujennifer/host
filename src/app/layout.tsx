import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Importer la police Poppins
const poppins = Poppins({
  weight: ["400", "600", "700"],  // Définir les poids des styles que tu veux utiliser
  subsets: ["latin"],  // Définir les sous-ensembles nécessaires
  variable: "--font-poppins",  // Variable CSS pour utiliser la police dans ton projet
});

export const metadata: Metadata = {
  title: "Clinique la Renaissance Divine",
  description: "Site pour une clinique",
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`} // Appliquer la police globalement
      >
        {children}
      </body>
    </html>
  );
}

