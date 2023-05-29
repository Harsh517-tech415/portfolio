import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Choudhary",
  description: "Generated by create next app",
};
<Head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
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
