/**@type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "images.unsplash.com"},
            {hostname: "lh3.googleusercontent.com"}, //An error should pop up after finally signing into the test account for google insert the hostname displayed in the unhandled runtime error here
            {hostname: "plus.unsplash.com"}
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
