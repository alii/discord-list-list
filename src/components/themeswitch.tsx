export function ThemSwitcher({colorMode, setColorMode}: {colorMode: string; setColorMode: any}) {
	return (
		<div
			className="fixed z-20 flex items-center justify-center px-4 py-2 space-x-2 capitalize bg-gray-200 rounded-md shadow-sm cursor-pointer bottom-4 right-4 dark:bg-gray-800 dark:text-white focus:outline-none"
			title="Click to switch theme"
			onClick={() => (colorMode === "dark" ? setColorMode("light") : setColorMode("dark"))}
		>
			{colorMode === "dark" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			)}

			<span className="hidden md:block">{colorMode}</span>
		</div>
	);
}
