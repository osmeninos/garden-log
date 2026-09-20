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

export function harvestDate(plantedAt: string, crop: string) {
	const date = new Date(plantedAt);
	date.setDate(date.getDate() + getCrop(crop).days);
	return date.toLocaleDateString();
}
