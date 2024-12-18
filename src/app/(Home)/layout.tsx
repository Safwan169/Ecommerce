import type { Metadata } from "next";
import NavbarMain from "@/app/Componants/Navbar/Navbar-Main/NavbarMain";
import "./globals.css";
import Footer from "@/app/Componants/Footer";
import { Poppins } from "next/font/google";
import ContextProvider from "@/app/GlobalDataShere/ContextProvider";
import ModalForCartWatchButton from "../Componants/card/ModalForCartWatchButton";

import CartMain from "../Componants/Cart/CartMain";
const poppins = Poppins({
  subsets: ["latin"], // Specify subsets
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Custom variable name
  display: "swap", // Font display strategy
});

export const metadata: Metadata = {
  title: "Electron",
  description: "Generated by Electron next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* for google fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
        <link rel="icon" type="image/svg+xml" href="/webLogo.png" />
        <title>Electron</title>
      </head>
      <ContextProvider>
        <body className={`${poppins.variable} antialiased `}>
          <NavbarMain />
          <div className="lg:w-full lg:px-2 xl:w-[1400px] z-10 mx-auto">
            {children}
          </div>
          <ModalForCartWatchButton />
          <CartMain />
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}