import {AppProps} from "next/app";
import {useEffect, useState} from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/main.css";

import {Modal} from "../components/modal";

export default function App({Component, pageProps}: AppProps) {
	const [modal, setModal] = useState(true);

	return (
		<>
			<Head>
				<title>Discord List List</title>
			</Head>

			{modal && <Modal setModal={setModal} />}

			<Component {...pageProps} />
		</>
	);
}
