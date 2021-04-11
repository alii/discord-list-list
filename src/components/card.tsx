import data from "../data.json";
//
type CardProps = typeof data["categories"]["Servers"][number];

export function Card(props: CardProps) {
	return (
		<a
			href={props.link}
			target="_blank"
			className="block rounded-md bg-gray-700 p-4 bg-opacity-5 dark:bg-opacity-20 hover:bg-opacity-10 space-y-2 hover:text-white hover:bottom-1 relative transition duration-200 ease-in-out"
		>
			<h2 className="text-2xl font-bold">{props.name}</h2>
			<p className="opacity-50 dark:opacity-75">{props.description}</p>
		</a>
	);
}
