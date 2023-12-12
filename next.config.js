/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ]
    }
}

module.exports = nextConfig
