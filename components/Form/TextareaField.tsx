import { forwardRef } from 'react';
import cx from 'classnames';
import { TextareaProps } from './types';

import styles from './Form.module.scss';

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(({error, ...props}, ref) => (
	<div className={`${styles.field} ${styles.textarea}`}>
		<label>
			<textarea
				className={cx(styles.input, {
					[styles.errorInput]: error
				})} 
				ref={ref}
				{...props}
			></textarea>
			<span className={styles.placeholder}>{props.placeholder}</span>
		</label>		
		{error && <span className={styles.errorMessage}>{error.message}</span>}
	</div>
))
