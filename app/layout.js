import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Choudhary",
  description: "Generated by create next app",
};
<Head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron"/>

</Head>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
