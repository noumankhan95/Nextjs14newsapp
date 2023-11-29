/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "cdn3.vectorstock.com", protocol: "https" }]
    }
}

module.exports = nextConfig
