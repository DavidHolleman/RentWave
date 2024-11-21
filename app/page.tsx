import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <main style={{ height: "95vh", display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20}}>
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