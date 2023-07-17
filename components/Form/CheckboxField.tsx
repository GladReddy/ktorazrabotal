import { forwardRef } from 'react';
import cx from 'classnames';
import { CheckboxFieldProps } from './types';

import styles from './Form.module.scss';

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(({ error, ...props }, ref) => (
	<div className={`${styles.field} ${styles.checkbox}`}>
		<label>
			{props.defaultValue ?? props.value}
			<input
				type="checkbox"
				className={cx({
					[styles.errorInput]: error
				})} 
				ref={ref}
				{...props}
			/>
			<span className={styles.checkboxCheckmark}></span>
		</label>
	</div>
));
