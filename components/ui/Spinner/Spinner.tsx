import styles from './Spinner.module.scss';

export const Spinner = () => {
	return (
		<div className={styles.body}>
			<div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
		</div>
	);
}
