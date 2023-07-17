import styles from './Button.module.scss';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export const Button = ({ text, ...props }: ButtonProps) => (
  <button className={styles.btn} {...props}>
      {text}
  </button>
)
