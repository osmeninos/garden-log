# garden-log

A web app for home gardeners. Track what you've planted, know when the harvest
is due, and find out how many liters each bed needs today.

Created for Hack Club's weekly agriculture-themed challenge, by
[Os Meninos](https://github.com/osmeninos).

## Why

Most people who grow food at home rely on guesswork. They guess when the harvest
will come, and they guess how much to water. garden-log replaces those guesses
with a log you keep and a number you can act on.

## Features

- **Plants** — log what you planted: a name, the crop, the date and the bed area
  in m². Mark a plant as watered, or remove it when the bed is done.
- **Harvest forecast** — each crop carries how long it takes to mature, so the
  table shows the date the harvest should land.
- **Irrigation** — reads today's weather for your location and works out how
  many liters each bed needs.
- **Export / import** — your data lives in the browser, so you can download it
  as JSON and load it back on another machine.

## How the irrigation number works

```
liters = (ET0 × Kc − rain) × area
```

- **ET0** is reference evapotranspiration: how much water the sun and the wind
  pull out of the soil today, in millimeters. Open-Meteo returns it per day.
- **Kc** is the crop coefficient, how thirsty a crop is compared to a reference
  grass. Corn is 1.2, strawberry is 0.85.
- **rain** is today's forecast rainfall — water we don't have to pour ourselves.
- 1 mm of water over 1 m² is exactly 1 liter, so multiplying by the bed area in
  m² gives liters directly.

If rain already covers the need, the result is 0 L.

Crop values (days to harvest and Kc) are rough estimates that vary by region and
variety. Kc values follow FAO-56 mid-season coefficients.

## Technologies

- Next.js (App Router, TypeScript)
- Tailwind CSS
- coss UI components
- Open-Meteo for weather data — free, no API key required

There is no database and no login. Everything is stored in the browser's
`localStorage`, which means your data stays on your machine — and disappears if
you clear your browser data, so use the export button.

## Getting started

```bash
bun i
bun dev
```

Then, open http://localhost:3000.

