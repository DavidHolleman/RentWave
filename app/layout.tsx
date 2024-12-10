import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/app/components/Navigation";
import "@/app/globals.css";

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

        <Navbar
          links={(() => {
            let elements: { name: string; path: string }[] = [];
            elements.push({
              name: "Search",
              path: "/item"
            });
            elements.push({
              name: "Post an Item",
              path: "/item/post"
            });
            elements.push({
              name: "Reviews",
              path: "/review"
            });
            elements.push({
              name: "Messages",
              path: "/message"
            });
            elements.push({
              name: "Create account",
              path: "/user/create"
            });
            elements.push({
              name: "Login",
              path: "/user/login"
            });
            // elements.push({
            //   name: "Your account",
            //   path: "/user"
            // });
            elements.push({
              name: "Logout",
              path: "/user/logout"
            });
            return elements;
          })()}
        />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}