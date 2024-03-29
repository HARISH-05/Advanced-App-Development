import '../assets/LoginForm.css'
import { Link } from 'react-router-dom';
const LoginForm = ({ onSignUpClick}) => {
  return (
    <div>
      <h2 className="login-h">Login</h2>
      <form >
        <label className="login-label"><b>Email:</b></label>
        <input className="login-input" type="email" placeholder="Enter your email" required/>
        <label className="login-label"><b>Password:</b></label>
        <input className="login-input" type="password" placeholder="Enter your password" required/>
        <button className="login-btn1" type="submit">Login</button>
      </form>
      <p className="login-p" >Dont have an account? <a className="login-btn2" onClick={onSignUpClick}><u className='a-u'>Sign Up</u></a></p>
    </div>
  );
};

export default LoginForm;

