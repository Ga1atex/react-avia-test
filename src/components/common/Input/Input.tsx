import { PropsWithChildren, useRef, useState } from 'react';
import styles from './Input.module.scss';

const Input: React.FC<
  PropsWithChildren & React.HTMLProps<HTMLInputElement>
> = ({ children, className, ...restProps }) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const onBlur = () => {
  //   if (inputRef.current !== null) {
  //     inputRef.current.reportValidity();
  //   }
  // };
  let inputClassName = styles.input;
  if (className) {
    inputClassName += ' ' + styles[className];
  }
  // const inputClassName = `${styles.input} ${styles[className]}`.trim();
  return (
    <label className={styles.label}>
      {children}
      <input
        className={inputClassName}
        {...restProps}
        // onBlur={onBlur}
        // ref={inputRef}
      />
    </label>
  );
};

export default Input;
