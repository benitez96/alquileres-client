/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'cdn.shopify.com',
			'motor.elpais.com',
		],
	}
}

module.exports = nextConfig
