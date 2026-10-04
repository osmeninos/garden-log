import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// CSP sem nonce pra manter as paginas estaticas; os scripts inline do next ficam liberados por 'unsafe-inline'.
// connect-src libera so a open-meteo (clima), unica chamada externa do app.
const csp = [
	"default-src 'self'",
	`script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob:",
	"font-src 'self'",
	"connect-src 'self' https://api.open-meteo.com",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'none'",
	"upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
	// em dev (http) o upgrade-insecure-requests quebraria os assets, so vale em producao
	{
		key: "Content-Security-Policy",
		value: isDev ? csp.replace("; upgrade-insecure-requests", "") : csp,
	},
	{ key: "X-Content-Type-Options", value: "nosniff" },
	{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
	{ key: "X-Frame-Options", value: "DENY" },
	{
		key: "Permissions-Policy",
		value:
			"camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains",
	},
];

const nextConfig: NextConfig = {
	headers: async () => [{ source: "/(.*)", headers: securityHeaders }],
};

export default nextConfig;
