import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
	Footer,
	Navbar
} from "@/app/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RentWave",
  description: "RentWave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Navbar style={{ height: "100vh"}}
          links={(() => {
            let elements: { name: string; path: string }[] = [];
            elements.push({
              name: "Post an Item", //be better at names
              path: "/postitem"
            });
            elements.push({
              name: "Messages",
              path: "/message"
            });
            elements.push({
              name: "Login",
              path: "/login"
            });
            elements.push({
              name: "Logout",
              path: "/logout"
            });
            return elements;
          })()}
        />
        
        {children}
      </body>
    </html>
  );
}