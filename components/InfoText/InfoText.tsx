import styles from './InfoText.module.scss';

type InfoTextProps = {
	text: string;
};

export const InfoText = ({ text }: InfoTextProps) => (
	<div className={styles.text}>
		<p>{text}</p>
	</div>
);
