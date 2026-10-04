import { CROPS } from "@/lib/crops";
import type { Plant } from "@/types/plant";

const PLANTS = "garden-log:plants";

function isDate(value: unknown): value is string {
	if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return false;
	}
	const date = new Date(`${value}T00:00:00Z`);
	return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

// o json vem de fora (localStorage ou arquivo importado), entao nada dele e confiavel
function parsePlant(item: unknown): Plant | null {
	if (typeof item !== "object" || item === null) return null;
	const { id, name, crop, plantedAt, area, lastWateredAt } = item as Record<
		string,
		unknown
	>;

	if (typeof id !== "string" || id === "") return null;
	if (typeof name !== "string") return null;
	const trimmed = name.trim();
	if (trimmed === "" || trimmed.length > 40) return null;
	if (typeof crop !== "string" || !Object.hasOwn(CROPS, crop)) return null;
	if (!isDate(plantedAt)) return null;
	if (typeof area !== "number" || !Number.isFinite(area) || area <= 0) {
		return null;
	}
	if (lastWateredAt !== undefined && !isDate(lastWateredAt)) return null;

	return { id, name: trimmed, crop, plantedAt, area, lastWateredAt };
}

// devolve so as plantas validas e quantas foram descartadas
export function parsePlants(raw: unknown) {
	if (!Array.isArray(raw)) return null;
	const plants = raw.flatMap((item) => parsePlant(item) ?? []);
	return { plants, skipped: raw.length - plants.length };
}

export function loadPlants(): Plant[] {
	try {
		const raw = localStorage.getItem(PLANTS);
		if (raw == null) return [];
		return parsePlants(JSON.parse(raw))?.plants ?? [];
	} catch {
		return [];
	}
}

export function savePlants(plants: Plant[]) {
	localStorage.setItem(PLANTS, JSON.stringify(plants));
}
