import { Logo } from '@/components/Logo';
import { LinkArrow } from '@/components/ui/LinkArrow';

import styles from './AppHeader.module.scss';

export const AppHeader = () => (
    <header role="presentation" className={styles.wrapper}>
        <div className="container">
            <div className={styles.body}>
                <Logo />
                <LinkArrow href="https://t.me/kotelov_com" target="_blank" >Telegram</LinkArrow>
            </div>
        </div>
    </header> 
);
