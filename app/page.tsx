"use client";

import { useEffect, useState } from "react";
import DataActions from "@/components/data-actions/data-actions";
import PlantDialog from "@/components/plant-dialog/plant-dialog";
import PlantEmpty from "@/components/plant-empty/plant-empty";
import PlantsList from "@/components/plant-list/plant-list";
import { loadPlants, savePlants } from "@/lib/storage";
import type { Plant } from "@/types/plant";

export default function Home() {
	const [plantItem, setPlantItem] = useState<Plant[]>([]);
	useEffect(() => {
		setPlantItem(loadPlants());
	}, []);

	function updatePlants(next: Plant[]) {
		setPlantItem(next);
		savePlants(next);
	}

<<<<<<< HEAD
=======
	function addPlant(plant: Plant) {
		updatePlants([...plantItem, plant]);
	}

	function removePlant(id: string) {
		updatePlants(plantItem.filter((plant) => plant.id !== id));
	}

	function waterPlant(id: string) {
		const today = new Date().toISOString().slice(0, 10);
		updatePlants(
			plantItem.map((plant) =>
				plant.id === id ? { ...plant, lastWateredAt: today } : plant,
			),
		);
	}

	if (loading) {
		return (
			<div className="flex min-h-dvh items-center justify-center">
				<Spinner className="size-6 text-muted-foreground" />
			</div>
		);
	}

>>>>>>> 8fb993c7900d69cf4cd81ed8d2d33257b494980e
	if (plantItem.length === 0) {
		return <PlantEmpty onAdd={addPlant} />;
	}

	return (
		<main className="mx-auto w-full max-w-4xl p-6">
			<div>
				<header className="mb-6 flex flex-wrap items-center justify-between gap-4">
					<div>
						<h1 className="font-heading font-semibold text-2xl">Garden log</h1>
						<p className="text-muted-foreground text-sm">
							{plantItem.length} plant{plantItem.length > 1 ? "s" : ""} growing
						</p>
					</div>
					<div className="flex items-center gap-2">
						<DataActions onImport={updatePlants} plants={plantItem} />
						<PlantDialog onAdd={addPlant} />
					</div>
				</header>
			</div>
			<div>
<<<<<<< HEAD
				<PlantsList plants={plantItem} />
=======
				<PlantsList
					onRemove={removePlant}
					onWater={waterPlant}
					plants={plantItem}
					weather={weather}
				/>
>>>>>>> 8fb993c7900d69cf4cd81ed8d2d33257b494980e
			</div>
		</main>
	);
}
