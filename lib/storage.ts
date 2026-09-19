import type { Plant } from "@/types/plant";

const PLANTS = "garden-log:plants";

export function loadPlants() {
	const raw = localStorage.getItem(PLANTS);
	if (raw == null) return [];
	return JSON.parse(raw);
}

export function savePlants(plants: Plant[]) {
	localStorage.setItem(PLANTS, JSON.stringify(plants));
}
