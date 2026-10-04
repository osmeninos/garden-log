import { getCrop } from "@/lib/crops";

// fallback da localização(SP)
const DEFAULT_PLACE = { latitude: -23.55, longitude: -46.63 };

export type Weather = {
	et0: number;
	// tem que ser em milimetros chefe
	rain: number;
};

function getPlace(): Promise<{ latitude: number; longitude: number }> {
	return new Promise((resolve) => {
		if (!navigator.geolocation) {
			resolve(DEFAULT_PLACE);
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) =>
				resolve({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				}),
			() => resolve(DEFAULT_PLACE),
		);
	});
}

export async function getWeather(): Promise<Weather> {
	const place = await getPlace();
	// api que o gpt me mandou to pensando em jogar num arquivo novo e criar uma pasta de apizona
	// 2 casas (~1 km) bastam pro clima e evitam mandar a localizacao exata pra api
	const latitude = place.latitude.toFixed(2);
	const longitude = place.longitude.toFixed(2);
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=et0_fao_evapotranspiration,precipitation_sum&timezone=auto&forecast_days=1`;

	const response = await fetch(url);
	if (!response.ok) throw new Error("weather request failed");
	const data = await response.json();

	const et0 = data?.daily?.et0_fao_evapotranspiration?.[0];
	const rain = data?.daily?.precipitation_sum?.[0];
	if (!Number.isFinite(et0) || !Number.isFinite(rain)) {
		throw new Error("unexpected weather response");
	}

	return { et0, rain };
}

export function waterToday(weather: Weather, crop: string, area: number) {
	const needed = weather.et0 * getCrop(crop).kc - weather.rain;
	if (needed <= 0) return 0;
	return Math.round(needed * area * 10) / 10;
}
