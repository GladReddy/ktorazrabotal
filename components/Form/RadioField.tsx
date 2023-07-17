import { forwardRef } from 'react';
import cx from 'classnames';
import { RadioFieldProps } from './types';

import styles from './Form.module.scss';

export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(({ label, error, ...props }, ref) => (
	<div className={`${styles.field} ${styles.radio}`}>
		<label>
			{label}
			<input
				type="radio"
				className={cx({
					[styles.errorInput]: error
				})} 
				{...props}
				ref={(input) => {
					if (input && (props.defaultChecked ?? props.checked)) input.checked = true;		
					if (typeof ref === 'function') ref.call(this, input)
				}}			
			/>
			<span className={styles.radioCheckmark}></span>
		</label>		
	</div>
))
