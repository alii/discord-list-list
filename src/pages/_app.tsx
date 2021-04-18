import {AppProps} from "next/app";
import Head from "next/head";
import {useState} from "react";

import "tailwindcss/tailwind.css";
import {ThemSwitcher} from "../components/themeswitch";
import "../styles/main.css";

const head = {
	title: "Discord List List",
	description: "Find your favourite listing website with Discord List List!",
	image: "/logo.png",
};

export default function App({Component, pageProps}: AppProps) {
	const [colorMode, setColorMode] = useState("dark");

	return (
		<>
			<Head>
				<title>{head.title}</title>

				{/* Open-graph */}
				<meta name="og:title" property="og:title" content={head.title} />
				<meta name="og:description" property="og:description" content={head.description} />
				<meta name="og:image" property="og:image" content={head.image} />

				{/* Twitter */}
				<meta name="twitter:title" property="twitter:title" content={head.title} />
				<meta name="twitter:description" property="twitter:description" content={head.description} />
				<meta name="twitter:image" property="twitter:image" content={head.image} />
			</Head>

			<div className={colorMode}>
				<ThemSwitcher colorMode={colorMode} setColorMode={setColorMode} />
				<Component {...pageProps} />
			</div>
		</>
	);
}
