import styles from './Form.module.scss';

export const Group = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.group}>
        {children}
    </div>
)
