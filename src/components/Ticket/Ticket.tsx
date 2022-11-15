import RadioButton from '../common/RadioButton/RadioButton';
import styles from './Ticket.module.scss';
import logo from '../../assets/images/logo.svg';
import baggageIcon from '../../assets/images/baggage.svg';
import { TicketType, TimeAvailableType } from '../../pages/avia/AviaInfo';
import { AviaStateType } from '../../store/reducers/aviaReducer/aviaReducer';

type TicketProps = AviaStateType &
  TimeAvailableType & {
    ticket: TicketType;
    setSelectedTime?: (time: TimeAvailableType) => void;
  };

const Ticket: React.FC<TicketProps> = ({
  ticket,
  from,
  to,
  departureDate,
  departureTime,
  arrivalTime,
  id: flightTimeId,
  setSelectedTime,
}) => {
  return (
    <div className={styles['ticket']}>
      <div className={styles['ticket__airline']}>
        <img
          className={styles['ticket__airline-logo']}
          src={logo}
          alt="Логотип компании"
        />
        <p className={styles['ticket__airline-title']}>{ticket.airline}</p>
      </div>

      <div className={styles['ticket__info']}>
        <div className={styles['ticket__track']}>
          <div className={styles['ticket__flight-point']}>
            <span className={styles['ticket__time']}>{departureTime}</span>
            <span className={styles['ticket__city']}>{from}</span>
            <span className={styles['ticket__date']}>{departureDate}</span>
          </div>
          <div className={styles['ticket__way']}>
            <span className={styles['ticket__airport-code']}>
              {ticket.departureAirport}
            </span>
            <span className={styles['ticket__way-duration']}>
              В пути {ticket.duration}
            </span>
            <span className={styles['ticket__airport-code']}>
              {ticket.arrivalAirport}
            </span>
          </div>
          <div className={styles['ticket__flight-point']}>
            <span className={styles['ticket__time']}>{arrivalTime}</span>
            <span className={styles['ticket__city']}>{to}</span>
            <span className={styles['ticket__date']}>{departureDate}</span>
          </div>
        </div>
        <div className={styles['ticket__switch']}>
          {setSelectedTime &&
            ticket.availableFlights.map((time) => {
              const { id, ...restProps } = time;

              return (
                <div className="" key={id}>
                  <RadioButton
                    checked={flightTimeId === id}
                    value={id}
                    onChange={() => {
                      setSelectedTime(time);
                    }}
                    {...restProps}
                  ></RadioButton>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles['ticket__baggage']}>
        <img src={baggageIcon} alt="Багаж" />
      </div>
    </div>
  );
};

export default Ticket;
