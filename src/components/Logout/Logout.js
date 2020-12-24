import {Route } from 'react-router-dom'
import Login from '../../containers/Login/Login';

const Logout = () => {
  return (
    <div>
      <Route path='/login' component={Login} />
      <a href="/login">Log out</a>
    </div>
  );
};

export default Logout;
