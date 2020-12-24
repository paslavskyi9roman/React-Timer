import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <p> Login</p>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
        <span>Don't have an account yet? Register</span>
      </form>
    </div>
  );
};

export default Login;
