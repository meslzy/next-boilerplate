import path from "node:path";

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	sassOptions: {
		includePaths: [
			path.join(process.cwd(), "src", "styles")
		],
	},
};

export default nextConfig;