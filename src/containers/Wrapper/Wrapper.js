import Timer from '../../components/Timer/Timer';
import './Wrapper.css';
import Logout from '../../components/Logout/Logout';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='logout'>
        <Logout />
      </div>
      <div className='timers'>
        <Timer type='Desktop' />
        <Timer type='Mobile' />
      </div>
    </div>
  );
};

export default Wrapper;
