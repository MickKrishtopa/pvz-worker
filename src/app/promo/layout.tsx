import type { Metadata } from 'next';

import { Header } from '@/shared/ui/Header/Header';

import styles from './page.module.scss';

export const metadata: Metadata = {
    title: 'ПВЗ',
    description: 'Ресурс для поиска работы в ПВЗ',
};

export default function PromoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles[`promo-layout`]}>
            <Header />
            {children}
        </div>
    );
}
