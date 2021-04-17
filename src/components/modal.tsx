export function Modal({setModal}: {setModal: any}) {
	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black bg-opacity-75">
			<div className="w-1/3 p-4 text-white bg-gray-800 rounded-md">
				<h1 className="text-xl font-semibold">Announcements</h1>
				<p className="mt-2">
					We have removed <strong className="font-semibold underline">discord.style</strong> due to their
					excessive downtime. We won't be adding them back until they fix their uptime. Please check back
					later if you are here to find a template for your server. You can use other services.
				</p>

				<button
					className="w-full px-4 py-2 mt-4 text-white transition bg-indigo-700 rounded-md focus:outline-none hover:bg-indigo-800"
					onClick={() => setModal(false)}
				>
					Close
				</button>
			</div>
		</div>
	);
}
