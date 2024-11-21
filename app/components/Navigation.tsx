"use client";
import Image from "next/image";
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
		<Link style={{margin:20, alignContent:"center"}}
			onClick={onClick}
			href={path}>
			{name}
		</Link>
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
		<nav style={{backgroundColor:"black", color:"white"}}>
			<Image style={{width:100, height:100}}
				src="/logo.png"
				alt="rentwave logo"
				width={180}
				height={180}
				priority
			/>
			{links.map(l => <NavbarLink {...l}></NavbarLink>)}
		</nav>
	);
}

export function Footer(): JSX.Element {
	return (
		<footer>
		</footer>
	);
}