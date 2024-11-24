export default function ErrorPrompt({
	code,
	details,
	children
}: {
	code: string;
	details: string;
	children?: React.ReactNode;
}) {
	return (
		<>
			<h1>
				Status <span>{code}</span>
			</h1>
			<br />
			<p>{details}</p>
			{children && (
				<>
					<br />
					{children}
				</>
			)}
		</>
	);
}