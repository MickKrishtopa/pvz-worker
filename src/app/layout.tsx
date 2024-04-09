import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import { Providers } from './providers';
import '../shared/styles/globals.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ПВЗ',
    description: 'Ресурс для поиска работы в ПВЗ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={mulish.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
