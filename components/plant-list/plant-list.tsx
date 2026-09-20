"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { harvestDate } from "@/lib/crops";
import { type Weather, waterToday } from "@/lib/water";
import type { Plant } from "@/types/plant";

const PlantsList = ({
	plants,
	weather,
}: {
	plants: Plant[];
	weather?: Weather | null;
}) => {
	return (
		<div>
			<Table variant="card">
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Crop</TableHead>
						<TableHead>Planted at</TableHead>
						<TableHead>Harvest</TableHead>
						<TableHead className="text-right">Area</TableHead>
						<TableHead className="text-right">Water today</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{plants.map((plant) => (
						<TableRow key={plant.id}>
							<TableCell className="font-medium">{plant.name}</TableCell>
							<TableCell className="text-muted-foreground">
								{plant.crop}
							</TableCell>
							<TableCell className="text-muted-foreground">
								{plant.plantedAt}
							</TableCell>
							<TableCell>{harvestDate(plant.plantedAt, plant.crop)}</TableCell>
							<TableCell className="text-right">{plant.area} m²</TableCell>
							<TableCell className="text-right">
								{weather
									? `${waterToday(weather, plant.crop, plant.area)} L`
									: "..."}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PlantsList;
