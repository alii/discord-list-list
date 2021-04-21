import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/main.css";

import { ThemSwitcher } from "../components/themeswitch";
import { ThemeProvider } from "next-themes";

const head = {
	title: "Discord List List",
	description: "Find your favourite listing website with Discord List List!",
	image: "/logo.png",
};

export default function App({ Component, pageProps }: AppProps) {
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

			<ThemeProvider defaultTheme="system" attribute="class">
				<ThemSwitcher />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
