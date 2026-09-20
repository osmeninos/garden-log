"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Plant } from "@/types/plant";

const PlantsList = ({ plants }: { plants: Plant[] }) => {
	return (
		<div>
			<Table variant="card">
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Crop</TableHead>
						<TableHead>Planted at</TableHead>
						<TableHead className="text-right">Area</TableHead>
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
							<TableCell className="text-right">{plant.area} m²</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PlantsList;
