import data from "../data.json";

type CardProps = typeof data["categories"]["Servers"][number];

export function Card(props: CardProps) {
	return (
		<a
			href={props.link}
			className="block rounded-md bg-gray-700 p-4 bg-opacity-5 dark:bg-opacity-20 hover:bg-opacity-10"
		>
			<h2 className="text-2xl font-bold">{props.name}</h2>
			<p>{props.description}</p>
		</a>
	);
}
