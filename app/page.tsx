"use client";

import { useEffect, useState } from "react";
import PlantDialog from "@/components/plant-dialog/plant-dialog";
import PlantEmpty from "@/components/plant-empty/plant-empty";
import PlantsList from "@/components/plant-list/plant-list";
import { loadPlants, savePlants } from "@/lib/storage";
import { getWeather, type Weather } from "@/lib/water";
import type { Plant } from "@/types/plant";

export default function Home() {
	const [plantItem, setPlantItem] = useState<Plant[]>([]);
	const [weather, setWeather] = useState<Weather | null>(null);

	useEffect(() => {
		setPlantItem(loadPlants());
		getWeather().then(setWeather);
	}, []);

	function addPlant(plant: Plant) {
		const next = [...plantItem, plant];
		setPlantItem(next);
		savePlants(next);
	}

	if (plantItem.length === 0) {
		return <PlantEmpty onAdd={addPlant} />;
	}

	return (
		<main className="mx-auto w-full max-w-4xl p-6">
			<div>
				<header className="mb-6 flex items-center justify-between gap-4">
					<div>
						<h1 className="font-heading font-semibold text-2xl">Garden log</h1>
						<p className="text-muted-foreground text-sm">
							{plantItem.length} plant{plantItem.length > 1 ? "s" : ""} growing
						</p>
					</div>
					<PlantDialog onAdd={addPlant} />
				</header>
			</div>
			<div>
				<PlantsList plants={plantItem} weather={weather} />
			</div>
			<footer className="mt-10 border-t pt-6 text-muted-foreground text-sm">
				Feito por{" "}
				<a
					className="text-foreground underline underline-offset-4 hover:text-primary"
					href="https://github.com/luannzin"
					rel="noreferrer"
					target="_blank"
				>
					luannzin
				</a>{" "}
				&{" "}
				<a
					className="text-foreground underline underline-offset-4 hover:text-primary"
					href="https://github.com/di0rio"
					rel="noreferrer"
					target="_blank"
				>
					di0rio
				</a>{" "}
				pela equipe{" "}
				<a
					className="text-foreground underline underline-offset-4 hover:text-primary"
					href="https://github.com/osmeninos"
					rel="noreferrer"
					target="_blank"
				>
					Os Meninos
				</a>
			</footer>
		</main>
	);
}
