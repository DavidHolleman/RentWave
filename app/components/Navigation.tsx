"use client";

import Image from "next/image";
import {
	CSSProperties,
	MouseEventHandler,
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
		<Link style={{margin:20}}
			onClick={onClick}
			href={path}>
			{name}
		</Link>
	);
}

export function Navbar({
	links,
	includeIcon
}: {
	links: { name: string; path: string }[];
	includeIcon?: boolean;
	specialElements?: JSX.Element;
	style?: CSSProperties;
}): JSX.Element {
	includeIcon = includeIcon ?? true;

	let [itemsExpanded, setExpanded] = useState<boolean>(false);

	return (
		<nav style={{backgroundColor:"black", color:"white", display: "flex", alignItems:"center"}}>
			<a href="/">
				<Image style={{width:55, height:55}}
					src="/logo.png"
					alt="rentwave logo"
					width={180}
					height={180}
					priority
				/>
			</a>
			{links.map(l => <NavbarLink key={crypto.randomUUID()} {...l}></NavbarLink>)}
		</nav>
	);
}