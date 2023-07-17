import { FC } from 'react';
import { FormProps } from './types';

import { RadioField } from './RadioField';
import { TextField } from './TextField';
import { CheckboxField } from './CheckboxField';
import { TextareaField } from './TextareaField';
import { Group } from './Group';
import { Submit } from './Submit';

import styles from './Form.module.scss';

export const Form: FC<FormProps> & {
	RadioField: typeof RadioField;
	TextField: typeof TextField;
	CheckboxField: typeof CheckboxField;
	TextareaField: typeof TextareaField;
	Group: typeof Group;
	Submit: typeof Submit;
} = (props) => (
	<form
		className={styles.form}
		{...props}
	>
		{props.children}
	</form>
);

Form.RadioField = RadioField;
Form.TextField = TextField;
Form.CheckboxField = CheckboxField;
Form.TextareaField = TextareaField;
Form.Group = Group;
Form.Submit = Submit;
