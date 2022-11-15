import React, { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { RouteNames } from '../../router';
import { aviaActionCreators } from '../../store/reducers/aviaReducer/aviaReducer';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import styles from './Avia.module.scss';

const Avia: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValues, setInputValues] = useState({
    from: '',
    to: '',
    departureDate: '',
    dateBack: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  type inputValuesType = keyof typeof inputValues;

  const inputsData = [
    {
      name: 'from',
      placeholder: 'Город вылета',
      children: 'Откуда',
      required: true,
      pattern: '[a-zA-Zа-яёА-ЯЁ\\s,#.-]+',
      title: 'Введите текстовое значение',
    },
    {
      name: 'to',
      placeholder: 'Город прилёта',
      children: 'Куда',
      required: true,
      pattern: '[a-zA-Zа-яёА-ЯЁ\\s,#.-]+',
      title: 'Введите текстовое значение',
    },
    {
      className: 'date',
      name: 'departureDate',
      placeholder: 'дд.мм.гг',
      children: 'Туда',
      required: true,
      pattern:
        '^\\s*(3[01]|[12][0-9]|0[1-9])\\.(1[0-2]|0[1-9])\\.(\\d{2})\\s*$',
      title: 'В формате дд.мм.гг',
    },
    {
      className: 'date',
      name: 'dateBack',
      placeholder: 'дд.мм.гг',
      children: 'Обратно',
      pattern:
        '^\\s*(3[01]|[12][0-9]|0[1-9])\\.(1[0-2]|0[1-9])\\.(\\d{2})\\s*$',
      title: 'В формате дд.мм.гг',
    },
  ];

  const handleInputChange =
    (inputName: keyof typeof inputValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({ ...inputValues, [inputName]: e.target.value });
    };

  useEffect(() => {
    if (formRef.current !== null) {
      setIsDisabled(!formRef.current.checkValidity());
    }
  }, [inputValues]);

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // const formData = new FormData(form.current!);
    dispatch(aviaActionCreators.setState(inputValues));
    navigate(`${RouteNames.AVIA}${RouteNames.INFO}`);
  };

  return (
    <form
      className={styles['avia-form']}
      onSubmit={submitHandler}
      ref={formRef}
    >
      <div className={styles['avia-form__header']}>
        {inputsData.map((inputData) => {
          const { children, ...inputProps } = inputData;

          return (
            <Input
              key={inputData.name}
              {...inputProps}
              value={inputValues[inputData.name as inputValuesType]}
              onChange={handleInputChange(inputData.name as inputValuesType)}
            >
              {children}
            </Input>
          );
        })}
      </div>
      <div className={styles['avia-form__footer']}>
        <Button disabled={isDisabled}>Найти билеты</Button>
      </div>
    </form>
  );
};

export default Avia;
