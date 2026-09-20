"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import PlantForm from "@/components/plant-form/plant-form";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogDescription,
	DialogHeader,
	DialogPanel,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { Plant } from "@/types/plant";

const PlantDialog = ({ onAdd }: { onAdd: (plant: Plant) => void }) => {
	const [open, setOpen] = useState(false);

	function handleAdd(plant: Plant) {
		onAdd(plant);
		setOpen(false);
	}

	return (
		<div>
			<Dialog onOpenChange={setOpen} open={open}>
				<DialogTrigger render={<Button />}>
					<PlusIcon />
					New plant
				</DialogTrigger>
				<DialogPopup>
					<DialogHeader>
						<DialogTitle>New plant</DialogTitle>
						<DialogDescription>
							Add something you just planted. You can log waterings later.
						</DialogDescription>
					</DialogHeader>
					<DialogPanel>
						<PlantForm onAdd={handleAdd} />
					</DialogPanel>
				</DialogPopup>
			</Dialog>
		</div>
	);
};

export default PlantDialog;
