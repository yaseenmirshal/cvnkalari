// import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.scss'


// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata = {
    title: 'CVN Kalari UK - Ancient Art, Inspired Minds',
    description: 'The home of Kalaripayattu, the ancient martial art of Kerala, India, and the mother of all martial arts.',
}



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} >
                {children}
            </body>
        </html>
    );
}
