import cx from 'classnames';
import Link from 'next/link';

import { Icon } from '@/components/ui/Icon';

import styles from './LinkArrow.module.scss';

type LinkArrowProps = typeof Link.defaultProps & {
	href: string;
};

export const LinkArrow = ({ children, className, ...props }: LinkArrowProps) => {
	return (
		<Link
			className={cx([styles.item, className])}
			{...props}
		>
			{children}
			<Icon name="arrow" />
		</Link>
	);
};
