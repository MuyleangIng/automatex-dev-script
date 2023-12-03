import HeroSection from "@/components/HeroSection";

const desc = "Deploy your application with AutomateX.";
export const metadata = {
    title: 'Home - AUTOMATEX ',
    description: desc,
    locale: 'en-US',
    category: 'AUTOMATEX',
    type: 'website',
    siteName: 'AUTOMATEX',
    openGraph:{
        title: 'Home - AUTOMATEX',
        description: desc,
        url: '/',
        siteName: 'AUTOMATEX',
        images: [
            {
                url: "/mainlogo.png",
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: 'Home - AUTOMATEX'
        },
        description: desc,
        creator: 'AUTOMATEX Team ',
        images: [
            "/mainlogo.png"
        ],
    }
}

export default function Home() {
    return (<HeroSection/>);
}
