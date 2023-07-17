import { LinkArrow } from "@/components/ui/LinkArrow";

import styles from './Work.module.scss';

type CompanyProps = {
    name: string,
    site: string
}

export type WorkProps = {
	name: string;
	year: string;
	company: CompanyProps;
};

export const Work = ( { name, year, company }: WorkProps ) => (
    <div className={styles.wrapper}>
        <div className={styles.name}>
            {name}
            {year && (<span className={styles.year}>{year}</span>)}
        </div>
        <div className={styles.company}>{company.name}</div>
        <LinkArrow href={company.site} className={styles.link} target="_blank">Сайт разработчика</LinkArrow>
    </div>
)
