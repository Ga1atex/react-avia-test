import { PropsWithChildren } from 'react';
import styles from './Input.module.scss';

const Input: React.FC<
  PropsWithChildren & React.HTMLProps<HTMLInputElement>
> = ({ children, className, ...restProps }) => {
  let inputClassName = styles.input;
  if (className) {
    inputClassName += ' ' + styles[className];
  }
  return (
    <label className={styles.label}>
      {children}
      <input className={inputClassName} {...restProps} />
    </label>
  );
};

export default Input;
