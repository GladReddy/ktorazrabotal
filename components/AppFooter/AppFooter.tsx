'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';

import { NavLink } from '@/components/ui/NavLink';

import styles from './AppFooter.module.scss';

export const AppFooter = () => {
    const currentRoute = usePathname();

    return(
        <footer role="contentinfo" className={styles.wrapper}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.box}>
                        <NavLink exact href="/about">О сервисе</NavLink>
                        <NavLink exact href="/add">Добавить авторство сайта</NavLink>
                        <Link href="/" className={ currentRoute === '/add' ? 'is-active' : '' }>
                            
                        </Link>
                    </div>
                    <div className={styles.box}>
                        <NavLink exact href="/privacy-policy">Политика конфиденциальности</NavLink>
                        <a href="https://kotelov.com/" className={styles.developer} target="_blank">
                            Дизайн и идея
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 13" width="85"><path d="M0 .3h4.3v5.1h1.3L8.1.3h4.3v.8l-3 5.3 3.3 5.5v.8H8.3L5.5 7.8H4.2v4.9H-.1L0 .3zM19.9 13c-1.3 0-2.5-.3-3.5-.8-1-.6-1.8-1.3-2.4-2.3s-.8-2.1-.8-3.4.3-2.4.8-3.4c.6-1 1.4-1.8 2.4-2.3 1-.6 2.2-.8 3.5-.8s2.5.3 3.5.8 1.8 1.3 2.4 2.3.9 2.1.9 3.4-.3 2.4-.9 3.4-1.4 1.7-2.4 2.3c-1.1.5-2.2.8-3.5.8zm0-3.3a2.32 2.32 0 0 0 1.9-.9c.5-.6.8-1.4.8-2.3 0-.6-.1-1.2-.4-1.7a2.73 2.73 0 0 0-.9-1.2c-.4-.3-.9-.4-1.4-.4s-1 .1-1.4.4a2.73 2.73 0 0 0-.9 1.2c-.2.5-.3 1.1-.3 1.7 0 1 .2 1.7.7 2.3.4.6 1.1.9 1.9.9zM30 3h-2.6V.3H37V3h-2.6v9.7H30V3zM38.7.3h8.9V3h-4.4v2.3h4v2.3h-4V10h4.4v2.7h-8.9V.3zm10.9 0h4V10H58v2.7h-8.4V.3zM65.4 13c-1.3 0-2.5-.3-3.5-.8-1-.6-1.8-1.3-2.4-2.3s-.8-2.1-.8-3.4.3-2.4.8-3.4c.6-1 1.4-1.8 2.4-2.3 1-.6 2.2-.8 3.5-.8s2.5.3 3.5.8 1.8 1.3 2.4 2.3.9 2.1.9 3.4-.3 2.4-.9 3.4-1.4 1.7-2.4 2.3c-1 .5-2.2.8-3.5.8zm0-3.3a2.32 2.32 0 0 0 1.9-.9c.5-.6.8-1.4.8-2.3 0-.6-.1-1.2-.4-1.7a2.73 2.73 0 0 0-.9-1.2c-.4-.3-.9-.4-1.4-.4s-1 .1-1.4.4a2.73 2.73 0 0 0-.9 1.2c-.2.5-.3 1.1-.3 1.7 0 1 .2 1.7.7 2.3a2.32 2.32 0 0 0 1.9.9zM72.6.3h4.2l2 7.8 2-7.8h4.4l-4 12.4h-4.7L72.6.3z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
