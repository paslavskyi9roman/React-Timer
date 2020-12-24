import React from 'react';
import CountUp from 'react-countup';
import './Timer.css';
import { MdAvTimer } from 'react-icons/md';

const Timer = (props) => {
  return (
    <div className={'timer'}>
      <p>{props.type}</p>
      <MdAvTimer className='icon' />
      <CountUp end={5000} className='counter' />
    </div>
  );
};

export default Timer;
