import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';
import './styles/globals.css';

const onest = Onest({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

export const metadata: Metadata = {
    title: 'jealleal - портфолио',
    icons: {
        icon: '/static/jealleal.png',
        shortcut: '/static/jealleal.png',
        apple: '/static/jealleal.png'
    },
    openGraph: {
        title: 'jealleal - портфолио',
        description: 'Человек, разработчик',
        url: 'https://vblox.lol/',
        siteName: 'vblox.lol',
        images: 'https://andcool.ru/static/jealleal.png'
    },
    twitter: {
        card: 'summary'
    },
    other: {
        'theme-color': '#0b5000'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 0.8
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body className={onest.className}>{children}</body>
        </html>
    );
}
