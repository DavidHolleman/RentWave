import ErrorPrompt from "./components/ErrorPrompt";
import RentWaveLogo from "@/app/components/RentWaveLogo";

export default function NotFound() {
	return (
		<div className="box">
			<RentWaveLogo />
			<div className="center">
				<ErrorPrompt
					code={"404"}
					details="The requested page is not available :("
				/>
			</div>
		</div>
	);
}
