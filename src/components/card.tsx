import data from "../data.json";

type CardProps = typeof data["categories"]["Servers"][number];

export function Card(props: CardProps) {
	return (
		<a href={props.link} className="block">
			<h2>{props.name}</h2>
		</a>
	);
}
