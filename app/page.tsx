"use client";

import { useEffect, useState } from "react";
import PlantForm from "@/components/plant-form/plant-form";
import PlantsList from "@/components/plant-list/plant-list";
import { loadPlants } from "@/lib/storage";
import type { Plant } from "@/types/plant";

export default function Home() {
	const [plantItem, setPlantItem] = useState<Plant[]>([]);
	useEffect(() => {
		setPlantItem(loadPlants());
	}, []);

	return (
		<div>
			<div>{/* <PlantForm /> */}</div>
			<div>
				<PlantsList plants={plantItem} />
			</div>
		</div>
	);
}
