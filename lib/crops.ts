export const CROPS = {
	lettuce: 60,
	tomato: 100,
	carrot: 90,
	bean: 75,
	corn: 110,
	pepper: 110,
	onion: 130,
	cucumber: 55,
	zucchini: 50,
	cabbage: 90,
	strawberry: 90,
	basil: 60,
};

export function harvestDate(plantedAt: string, crop: string) {
	const date = new Date(plantedAt);
	date.setDate(date.getDate() + CROPS[crop as keyof typeof CROPS]);
	return date.toLocaleDateString();
}
