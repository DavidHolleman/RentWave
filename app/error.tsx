"use client";

import { useEffect } from "react";
import ErrorPrompt from "./components/ErrorPrompt";
import RentWaveLogo from "./components/RentWaveLogo";

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
		// Log the error to an error reporting service
	}, [error]);

	return (
		<div className="box">
			<RentWaveLogo />
			<div className="center">
			<ErrorPrompt
				code={error.name}
				details={ "An exception occurred on your end! Check your console for details or refresh." }
			/>
			</div>
		</div>
	);
}
