import { useState, useEffect } from 'react';

import './style.css'

// eslint-disable-next-line react/prop-types
const CountDown = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const timeRemaining = target - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-element">
        <p className="counter-number">{time.days}</p>
        <span className="counter-text">días</span>
      </div>
      <div className="counter-element">
        <p className="counter-number">{time.hours}</p>
        <span className="counter-text">horas</span>
      </div>
      <div className="counter-element">
        <p className="counter-number">{time.minutes}</p>
        <span className="counter-text">minutos</span>
      </div>
      <div className="counter-element">
        <p className="counter-number">{time.seconds}</p>
        <span className="counter-text">segundos</span>
      </div>
    </div>
  );
};

export default CountDown;
