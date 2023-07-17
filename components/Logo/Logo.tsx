import Image from 'next/image'
import Link from 'next/link';

import styles from './Logo.module.scss';
import logo from '@/public/images/logo.svg';
import logoDescr from '@/public/images/logo-descr.svg';


export const Logo = () => (
    <div className={styles.logo}>
        <Link href="/">                    
            <Image src={logo} alt="КТО РАЗРАБОТАЛ" priority />
            <Image src={logoDescr} alt="сайт или приложение" priority />	
        </Link>
    </div>
);
