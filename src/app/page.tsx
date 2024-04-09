import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';

import { useRouter } from 'next/router';

export default function Home() {
    // const router = useRouter();

    // useEffect(() => {
    //     router.push('/promo');
    // }, []);
    redirect('/promo');
    // return <main className={styles.main}>Hello</main>;
}
