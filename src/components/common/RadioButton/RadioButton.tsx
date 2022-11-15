import { PropsWithChildren } from 'react';
import styles from './RadioButton.module.scss';

type TimeType = {
  departureTime: string;
  arrivalTime: string;
};

const RadioButton: React.FC<
  TimeType & React.InputHTMLAttributes<HTMLInputElement>
> = ({ departureTime, arrivalTime, ...restProps }) => {
  return (
    <label className={styles.label}>
      <span className={styles.depTime}>{departureTime}</span> - {arrivalTime}
      <input
        type="radio"
        name="race"
        className="visually-hidden"
        {...restProps}
      />
    </label>
  );
};

export default RadioButton;
