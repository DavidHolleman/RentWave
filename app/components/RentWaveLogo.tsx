import Image from "next/image";

export default function RentWaveLogo() {
	return (
		<Image className="center"
            src="/logo.png"
            alt="RentWave Logo"
            width={180}
            height={180}
            priority
        />
	);
}
