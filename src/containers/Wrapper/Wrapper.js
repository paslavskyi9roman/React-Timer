import { Route, NavLink, Switch } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import Login from '../../containers/Login/Login';
import './Wrapper.css';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='logout'>
        <NavLink to='/login'>Log out</NavLink>
      </div>
      <div className='timers'>
        <Timer type='Desktop' />
        <Timer type='Mobile' />
      </div>
      <Switch>
        <Route exact path='/Login' component={Login}></Route>
      </Switch>
    </div>
  );
};

export default Wrapper;
