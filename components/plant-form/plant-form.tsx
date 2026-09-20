"use client";

import type React from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CROPS } from "@/lib/crops";
import type { Plant } from "@/types/plant";
import { Button } from "../ui/button";

const PlantForm = ({ onAdd }: { onAdd: (plant: Plant) => void }) => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);

		onAdd({
			id: crypto.randomUUID(),
			name: String(data.get("name")),
			crop: String(data.get("crop")),
			plantedAt: String(data.get("plantedAt")),
			area: Number(data.get("area")),
		});

		form.reset();
	}

	return (
		<div>
			<form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
				<Field>
					<FieldLabel>Name</FieldLabel>
					<Input name="name" placeholder="Back tomato" required type="text" />
				</Field>

				<Field>
					<FieldLabel>Crop</FieldLabel>
					<Select defaultValue="lettuce" name="crop">
						<SelectTrigger>
							<SelectValue className="capitalize" />
						</SelectTrigger>
						<SelectPopup>
							{Object.keys(CROPS).map((crop) => (
								<SelectItem className="capitalize" key={crop} value={crop}>
									{crop}
								</SelectItem>
							))}
						</SelectPopup>
					</Select>
				</Field>

				<Field>
					<FieldLabel>Planted at</FieldLabel>
					<Input name="plantedAt" required type="date" />
				</Field>

				<Field>
					<FieldLabel>Area (m²)</FieldLabel>
					<Input min="0" name="area" required step="0.1" type="number" />
				</Field>

				<div className="sm:col-span-2">
					<Button className="cursor-pointer" type="submit">
						Add plant
					</Button>
				</div>
			</form>
		</div>
	);
};

export default PlantForm;
