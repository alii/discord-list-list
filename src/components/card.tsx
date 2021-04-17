import data from "../data.json";
//
type CardProps = typeof data["categories"]["Servers"][number];

export function Card(props: CardProps) {
	if (props.name !== "Discord.style")
		return (
			<a
				href={props.link}
				target="_blank"
				className="relative block p-4 space-y-2 transition duration-200 ease-in-out bg-gray-700 rounded-md bg-opacity-5 dark:bg-opacity-20 hover:bg-opacity-10 hover:text-white hover:bottom-1"
			>
				<h2 className="text-2xl font-bold">{props.name}</h2>
				<p className="opacity-50 dark:opacity-75">{props.description}</p>
			</a>
		);
	else
		return (
			<div
				onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
				className="block p-4 space-y-2 text-left transition duration-200 ease-in-out bg-gray-700 rounded-md cursor-pointer bg-opacity-5 dark:bg-opacity-20 hover:bg-opacity-10 hover:text-white hover:bottom-1 focus:outline-none"
			>
				<h2 className="text-2xl font-bold line-through">{props.name}</h2>
				<p className="line-through opacity-50 dark:opacity-75">{props.description}</p>
				<small className="text-sm text-red-700 uppercase">Will be removed soon</small>
			</div>
		);
}
