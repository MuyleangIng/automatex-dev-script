/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            "avatars.githubusercontent.com",'lh3.googleusercontent.com',
            'flowbite.s3.amazonaws.com',
            'i.pinimage.com'
        ]
    }
}

module.exports = nextConfig
