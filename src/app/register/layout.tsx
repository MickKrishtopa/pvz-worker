import styles from './page.module.scss';

export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className={styles['register-layout']}>{children}</div>;
}
