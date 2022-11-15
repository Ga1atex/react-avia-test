import styles from './AviaInfo.module.scss';
import logo from '../../assets/images/logo.svg';
import baggageIcon from '../../assets/images/baggage.svg';
import RadioButton from '../../components/common/RadioButton/RadioButton';
import { useEffect, useState } from 'react';
import { forEachChild } from 'typescript';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { RouteNames } from '../../router';
import { useNavigate } from 'react-router-dom';
import Ticket from '../../components/Ticket/Ticket';

const ticket = {
  departureAirport: 'SVO',
  arrivalAirport: 'ROV',
  ticketStatus: 'Невозвратный',
  duration: '1 ч 45 мин',
  airline: 'S7 Airlines',
  price: 4150,
  availableFlights: [
    {
      id: 1,
      departureTime: '09:20',
      arrivalTime: '11:05',
    },
    {
      id: 2,
      departureTime: '10:20',
      arrivalTime: '12:05',
    },
    {
      id: 3,
      departureTime: '11:20',
      arrivalTime: '13:05',
    },
  ],
};
export type TimeAvailableType = typeof ticket.availableFlights[0];
export type TicketType = typeof ticket;

const AviaInfo: React.FC = () => {
  const aviaState = useAppSelector((state) => state.aviaPage);
  const { from, to, departureDate, dateBack } = aviaState;
  const navigate = useNavigate();

  if (!from || !to || !departureDate) {
    navigate(RouteNames.AVIA);
  }

  const [selectedTime, setSelectedTime] = useState<TimeAvailableType>(
    ticket.availableFlights[0]
  );

  return (
    <div className={styles['flights']}>
      <div className={styles['flights__status']}>
        <span>{ticket.ticketStatus}</span>
      </div>
      <div className={styles['flights__flights']}>
        {dateBack ? (
          <>
            <Ticket ticket={ticket} {...aviaState} {...selectedTime} />
            <Ticket
              ticket={ticket}
              {...aviaState}
              from={to}
              to={from}
              {...selectedTime}
            />
          </>
        ) : (
          <Ticket
            ticket={ticket}
            {...aviaState}
            {...selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}
      </div>
      <p className={styles['flights__price']}>
        {dateBack !== '' ? ticket.price * 2 : ticket.price}
      </p>
    </div>
  );
};

export default AviaInfo;
