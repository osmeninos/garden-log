"use client";

import { SproutIcon } from "lucide-react";
import PlantDialog from "@/components/plant-dialog/plant-dialog";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import type { Plant } from "@/types/plant";

const PlantEmpty = ({ onAdd }: { onAdd: (plant: Plant) => void }) => {
	return (
		<Empty className="min-h-dvh">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<SproutIcon />
				</EmptyMedia>
				<EmptyTitle>No plants yet</EmptyTitle>
				<EmptyDescription>
					Add your first plant to start your garden log.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<PlantDialog onAdd={onAdd} />
			</EmptyContent>
		</Empty>
	);
};

export default PlantEmpty;
