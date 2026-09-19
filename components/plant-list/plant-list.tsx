"use client";

import type { Plant } from "@/types/plant";
import { Card } from "../ui/card";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { BookIcon, RouteIcon } from "lucide-react";
import { Button } from "../ui/button";

const PlantsList = ({ plants }: { plants: Plant[] }) => {
	if (plants.length === 0) {
		return (
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<RouteIcon />
					</EmptyMedia>
					<EmptyTitle>Dont have plants in moment!</EmptyTitle>
					<EmptyDescription>Create a plant to get started.</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<div className="flex gap-2">
						<Button size="sm">Create meeting</Button>
						<Button size="sm" variant="outline">
							<BookIcon />
							View docs
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		);
	}
	return (
		<div>
			<div>
				{plants.map((plants) => (
					<Card key={plants.id}>{plants.name}</Card>
				))}
			</div>
		</div>
	);
};

export default PlantsList;
