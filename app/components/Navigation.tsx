"use client";

import {
	CSSProperties,
	DetailedHTMLProps,
	Fragment,
	HTMLAttributes,
	MouseEventHandler,
	useContext,
	useState
} from "react";

import Link from "next/link";

function NavbarLink({
	name,
	path,
	onClick
}: {
	name: string;
	path: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
	return (
		<Link
			onClick={onClick}
			href={path}
			className="rounded-md whitespace-nowrap md:rounded-none w-full p-4 md:p-0 bg-gray-100 sm:bg-transparent md:w-fit border-b-4">
			{name}
		</Link>
	);
}


function ScreenDimmer(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
	return (
		<div
			className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-20 md:hidden"
			{...props}
		/>
	);
}

export function Navbar({
	links,
	includeIcon,
	specialElements,
	style
}: {
	links: { name: string; path: string }[];
	includeIcon?: boolean;
	specialElements?: JSX.Element;
	style?: CSSProperties;
}): JSX.Element {
	includeIcon = includeIcon ?? true;

	let [itemsExpanded, setExpanded] = useState<boolean>(false);

	return (
		<div className="top-0 sticky shadow-md z-10 max-lg:mb-2">
			<div className="w-full h-fit bg-white">
			</div>
		</div>
	);
}

export function Footer(): JSX.Element {
	return (
		<div className="bg-cool-black w-full h-fit shadow-2xl mt-2">
		</div>
	);
}