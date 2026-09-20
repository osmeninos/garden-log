// cada um tem dias e necessidade hidrica da agricultura pesquisei e é mó loucura deve ta faltando coisa ainda eu acho

export const CROPS = {
	lettuce: { days: 60, kc: 1.0 },
	tomato: { days: 100, kc: 1.15 },
	carrot: { days: 90, kc: 1.05 },
	bean: { days: 75, kc: 1.15 },
	corn: { days: 110, kc: 1.2 },
	pepper: { days: 110, kc: 1.05 },
	onion: { days: 130, kc: 1.05 },
	cucumber: { days: 55, kc: 1.0 },
	zucchini: { days: 50, kc: 0.95 },
	cabbage: { days: 90, kc: 1.05 },
	strawberry: { days: 90, kc: 0.85 },
	basil: { days: 60, kc: 1.0 },
};

export function getCrop(crop: string) {
	return CROPS[crop as keyof typeof CROPS];
}

// filtrao do formato se quiser add mais manda bala ai luan
export function formatDate(date: string) {
	return date.replaceAll("-", "/");
}

export function harvestDate(plantedAt: string, crop: string) {
	const date = new Date(`${plantedAt}T00:00`);
	date.setDate(date.getDate() + getCrop(crop).days);

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}/${month}/${day}`;
}
