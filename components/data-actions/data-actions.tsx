"use client";

import { DownloadIcon, UploadIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Plant } from "@/types/plant";

const DataActions = ({
	plants,
	onImport,
}: {
	plants: Plant[];
	onImport: (plants: Plant[]) => void;
}) => {
	const fileInput = useRef<HTMLInputElement>(null);

	function exportPlants() {
		const file = new Blob([JSON.stringify(plants, null, 2)], {
			type: "application/json",
		});
		const url = URL.createObjectURL(file);

		const link = document.createElement("a");
		link.href = url;
		link.download = "garden-log.json";
		link.click();

		URL.revokeObjectURL(url);
	}

	async function importPlants(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		try {
			const imported = JSON.parse(await file.text());
			if (Array.isArray(imported)) onImport(imported);
		} catch {
			alert("This file is not a valid garden log export.");
		}

		e.target.value = "";
	}

	return (
		<div className="flex gap-2">
			<Button onClick={exportPlants} size="sm" variant="outline">
				<DownloadIcon />
				Export
			</Button>
			<Button
				onClick={() => fileInput.current?.click()}
				size="sm"
				variant="outline"
			>
				<UploadIcon />
				Import
			</Button>
			<input
				accept="application/json"
				className="hidden"
				onChange={importPlants}
				ref={fileInput}
				type="file"
			/>
		</div>
	);
};

export default DataActions;
