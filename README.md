# garden-log

## sprout

A web app for home gardeners. Track what you've planted, know when
to plant and harvest, and find out exactly how much water a plant needs today.

Created for Hack Club's weekly agriculture-themed challenge.

## Why

Most people who grow food at home rely on guesswork. They guess when to sow,
guess the harvest time, and guess the amount of water. Sprout replaces these
guesses with a log you maintain and concrete numbers to guide your actions.

## Features

- **Plants** — log what you've planted, including the crop, date, and
  bed area. Record every watering and fertilization event to review your activity history.
- **Calendar** — each crop has its own planting window and maturation time;
  the app tells you when to sow and provides a harvest forecast.
- **Irrigation** — fetches local weather forecasts and calculates how many liters the bed
  needs, based on reference evapotranspiration, crop coefficients, and precipitation.

## Technologies

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Custom UI components
- Open-Meteo for weather data — free, no API key required

There is no database. Everything is stored in the browser's `localStorage`, and you
can export or import your data as a JSON file.

## Getting started

```bash
bun i
bun dev
```

Then, open http://localhost:3000.

## Status

Early stage. Development proceeds in phases:

1. Project setup
2. Plants and activity logging
3. Planting calendar
4. Irrigation calculator
