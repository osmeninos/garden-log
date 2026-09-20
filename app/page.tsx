"use client";

import { useEffect, useState } from "react";
import PlantForm from "@/components/plant-form/plant-form";
import PlantsList from "@/components/plant-list/plant-list";
import { loadPlants, savePlants } from "@/lib/storage";
import type { Plant } from "@/types/plant";

export default function Home() {
	const [plantItem, setPlantItem] = useState<Plant[]>([]);
	useEffect(() => {
		setPlantItem(loadPlants());
	}, []);

	function addPlant(plant: Plant) {
		const next = [...plantItem, plant];
		setPlantItem(next);
		savePlants(next);
	}
	return (
		<div>
			<div>
				<PlantForm onAdd={addPlant} />
			</div>
			<div>
				<PlantsList plants={plantItem} />
			</div>
		</div>
	);
}
