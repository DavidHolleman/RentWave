import Image from "next/image";
import "@/app/globals.css";

export default function Home() {
  return (
    <div>
      <main style={{ height: "90vh", display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20}}>
        <Image
          src="/logo.png"
          alt="rentwave logo"
          width={180}
          height={180}
          priority
        />
        <h2> Welcome to RentWave! </h2>
      </main>
    </div>
  );
}