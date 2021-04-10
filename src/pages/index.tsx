import data from "../data.json";

const categories = Object.entries(data.categories);

export default function Home() {
	return (
		<>
			<div className="shadow-md bg-gray-100 dark:bg-gray-800">
				<div className="py-36 max-w-4xl mx-auto space-y-2 px-4">
					<h1 className="font-bold text-4xl">Discord List List</h1>
					<input
						type="text"
						placeholder="Search"
						className="bg-gray-900 bg-opacity-30 px-4 py-2 rounded-md w-full md:w-1/2 outline-none focus:outline-none focus:ring ring-gray-300"
					/>
				</div>
			</div>

			<div className="max-w-4xl mx-auto mt-8">
				{categories.map((entry) => {
					const [category, items] = entry;
					return <div key={category}>{JSON.stringify(items)}</div>;
				})}
			</div>
		</>
	);
}
