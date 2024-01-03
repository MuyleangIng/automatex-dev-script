/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
            },
            {
                hostname: 'lh3.googleusercontent.com',
            },
            {
                hostname: 'flowbite.s3.amazonaws.com',
            },
            {
                hostname: 'i.pinimg.com',
            },
            {
                hostname: 'wp-api.zipmex.com',
            },
            {
                hostname: "secure.gravatar.com",
            },
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
}

module.exports = nextConfig

