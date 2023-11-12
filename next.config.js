/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co', 'source.unsplash.com', "www.youtube.com"],
    },
    env: {
        FETCH_URI: 'http://localhost:5500/',
    },
}

module.exports = nextConfig
