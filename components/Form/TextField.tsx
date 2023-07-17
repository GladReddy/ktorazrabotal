import { forwardRef } from 'react';
import cx from 'classnames';
import { TextFieldProps } from './types';

import styles from './Form.module.scss';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ type = 'text', caption, error, ...props }, ref ) => (
	<div className={`${styles.field} ${styles.text}`}>
		<label>
			<input
				type={type}
				className={cx(styles.input, {
					[styles.errorInput]: error
				})} 
				ref={ref}
				{...props}
			/>
			<span className={styles.placeholder}>{props.placeholder}</span>
		</label>
		{error && <span className={styles.errorMessage}>{error.message}</span>}
		{caption && <span className={styles.caption}>{caption}</span>}
	</div>
))
