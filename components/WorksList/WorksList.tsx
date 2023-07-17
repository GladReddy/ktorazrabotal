import cx from 'classnames';
import { Work, WorkProps } from "@/components/Work";

import styles from './WorksList.module.scss';


type WorksListProps = {
	items: WorkProps[];
};

export const WorksList = ({ items }: WorksListProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>вот что удалось найти:</div>
			<ul
				className={cx({
					[styles.list]: true,
					[styles.listColumns]: items.length > 1,
				})}
			>
				{items.map((el, index) => (
					<li key={index}>
						<Work {...el} />
					</li>
				))}
			</ul>
		</div>
	);
};
