import {AppProps} from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/main.css";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Discord List List</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
