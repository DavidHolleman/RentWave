import ErrorPrompt from "./components/ErrorPrompt";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="box">
			<Image className="center"
                src="/logo.png"
                alt="rentwave logo"
                width={180}
                height={180}
                priority
            />
			<div className="center">
				<ErrorPrompt
					code={"404"}
					details="The requested page is not available :("
				/>
			</div>
		</div>
	);
}
