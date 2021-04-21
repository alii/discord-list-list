import data from "../data.json";
type CardProps = typeof data["categories"]["Servers"][number];

export function Card(props: CardProps) {
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noreferrer"
			className="p-4 transition-transform transform bg-gray-100 bg-opacity-50 rounded-md dark:bg-opacity-50 group hover:scale-105 dark:bg-gray-800"
		>
			<h2
				className="text-2xl font-semibold text-gray-800 truncate transition dark:group-hover:text-gray-100 dark:text-gray-600"
				title={props.name}
			>
				{props.name}
			</h2>

			<p className="transition dark:opacity-75 dark:group-hover:text-gray-200 line-clamp-3">
				{props.description}
			</p>
		</a>
	);
}
