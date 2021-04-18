import {Card} from "../components/card";
import {useInputFilter} from "use-input-filter";
import data from "../data.json";

const categories = Object.entries(data.categories);
const all = Object.values(data.categories).flat();

export default function Home() {
	const {state, setState, filtered} = useInputFilter((item, state) => {
		return (item.name + item.description).toLowerCase().includes(state.toLowerCase().trim());
	}, all);

	return (
		<>
			<header className="py-10 bg-gray-100 shadow-md dark:bg-gray-800">
				<div className="container px-4 mx-auto space-y-4 md:px-0 md:max-w-4xl">
					<img
						src="/logo.webp"
						className="mx-auto md:mx-0 brightness-0 dark:invert filter"
						alt="Discord"
						height={64}
						width={64}
					/>

					<h1 className="text-4xl font-bold text-center text-gray-900 md:text-left dark:text-gray-100">
						Discord List List
					</h1>

					<input
						type="text"
						placeholder="Search"
						className="w-full px-4 py-2 placeholder-gray-500 bg-gray-300 rounded-md outline-none dark:bg-gray-900 dark:placeholder-gray-400 bg-opacity-30 md:w-1/2 focus:outline-none focus:shadow-sm"
						onChange={(e) => setState(e.target.value)}
					/>

					<p className="text-sm text-justify opacity-50 md:text-md md:w-1/2 dark:text-white">
						If you dont use Discord List List to find the best Discord list, then how do you know that you
						have the best discord list from the potential Discord lists to find the best Discord? Look no
						more, for here is Discord List List.
					</p>

					<a
						href="https://www.producthunt.com/posts/discord-list-list?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-discord-list-list"
						target="_blank"
						rel="noreferrer"
						className="flex justify-center md:inline-block"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=291721&theme=light"
							alt="Discord List List - The ultimate list for finding the perfect Discord list. | Product Hunt"
							width="200"
							height="54"
							className="block transition filter dark:md:grayscale dark:hover:grayscale-0"
						/>
					</a>
				</div>
			</header>

			<div className="max-w-4xl mx-3 mt-8 md:mx-auto">
				{state === "" ? (
					<>
						{categories.map((entry) => {
							const [category, items] = entry;
							return (
								<div key={category}>
									<h2 className="mt-10 mb-4 text-4xl font-semibold text-center md:text-left">
										{category}
									</h2>
									<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
										{items.map((item) => {
											return (
												<Card
													key={item.link + item.name}
													name={item.name}
													link={item.link}
													description={item.description}
												/>
											);
										})}
									</div>
								</div>
							);
						})}
					</>
				) : (
					<div className="max-w-4xl mx-auto mt-8">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							{filtered.map((item) => {
								return (
									<Card
										key={item.link + item.name}
										name={item.name}
										link={item.link}
										description={item.description}
									/>
								);
							})}
						</div>

						{!filtered.length && <p className="text-center">No results :(</p>}
					</div>
				)}
				<p className={"text-center text-gray-600 py-8"}>Not affiliated with Discord Inc.</p>
			</div>
		</>
	);
}
