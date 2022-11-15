import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

const Button: React.FC<
  PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...restProps }) => {
  return (
    <button className={styles.btn} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
