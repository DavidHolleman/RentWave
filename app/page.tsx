import Image from "next/image";
import "./globals.css";
import { Navbar } from "./components/Navigation";

export default function Home() {
  return (
    <div>
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
      <main style={{ minHeight: "95vh" }}>
        <Image
          src="/logo.png"
          alt="rentwave logo"
          width={180}
          height={180}
          priority
        />
        <p> Welcome to RentWave! </p>
      </main>
    </div>
  );
}