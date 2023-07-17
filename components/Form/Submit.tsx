import { SubmitProps } from './types';

import { Button } from '@/components/ui/Button';

export const Submit = ({ text, ...props }: SubmitProps) => (
	<Button
		text={text}
		type="submit"
		{...props}
	/>
)
