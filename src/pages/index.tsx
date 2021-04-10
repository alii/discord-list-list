import data from "../data.json";

const categories = Object.entries(data.categories);

export default function Home() {
	return (
		<div className="max-w-7xl mx-auto">
			{categories.map((entry) => {
				const [category, items] = entry;
				return <div key={category}>{JSON.stringify(items)}</div>;
			})}
		</div>
	);
}
