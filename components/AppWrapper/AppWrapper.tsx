'use client';

import { useSelectedLayoutSegment } from 'next/navigation'

import styles from './AppWrapper.module.scss';


export const AppWrapper = ({ children }: { children: React.ReactNode }) => {    
	const segment = useSelectedLayoutSegment();
    return (
        <div className={`${styles.wrapper} page-${segment}-layout`}>
            {children}
        </div>
    )
}
