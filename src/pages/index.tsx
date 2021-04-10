import data from "../data.json";

const categories = Object.entries(data.categories);

export default function Home() {
	return (
		<>
			<div className="shadow-md bg-gray-100 dark:bg-gray-800">
				<div className="py-36 max-w-4xl mx-auto">
					<h1 className="font-bold text-4xl">Discord List List</h1>
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
