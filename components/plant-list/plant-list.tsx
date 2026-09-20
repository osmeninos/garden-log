"use client";

import { DropletIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatDate, harvestDate } from "@/lib/crops";
import { type Weather, waterToday } from "@/lib/water";
import type { Plant } from "@/types/plant";

const PlantsList = ({
	plants,
	weather,
	onWater,
	onRemove,
}: {
	plants: Plant[];
	weather?: Weather | null;
	onWater?: (id: string) => void;
	onRemove?: (id: string) => void;
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
						<TableHead>Last watered</TableHead>
						<TableHead className="text-right">Area</TableHead>
						<TableHead className="text-right">Water today</TableHead>
						<TableHead />
					</TableRow>
				</TableHeader>
				<TableBody>
					{plants.map((plant) => (
						<TableRow key={plant.id}>
							<TableCell className="font-medium">{plant.name}</TableCell>
							<TableCell className="capitalize text-muted-foreground">
								{plant.crop}
							</TableCell>
							<TableCell className="text-muted-foreground">
								{formatDate(plant.plantedAt)}
							</TableCell>
							<TableCell>{harvestDate(plant.plantedAt, plant.crop)}</TableCell>
							<TableCell className="text-muted-foreground">
								{plant.lastWateredAt ? formatDate(plant.lastWateredAt) : "never"}
							</TableCell>
							<TableCell className="text-right">{plant.area} m²</TableCell>
							<TableCell className="text-right">
								{weather
									? `${waterToday(weather, plant.crop, plant.area)} L`
									: "..."}
							</TableCell>
							<TableCell>
								<div className="flex justify-end gap-1">
									<Button
										aria-label="Mark as watered today"
										className="cursor-pointer"
										onClick={() => onWater(plant.id)}
										size="icon"
										variant="ghost"
									>
										<DropletIcon />
									</Button>
									<Button
										aria-label="Remove plant"
										className="cursor-pointer"
										onClick={() => onRemove(plant.id)}
										size="icon"
										variant="ghost"
									>
										<TrashIcon />
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PlantsList;
