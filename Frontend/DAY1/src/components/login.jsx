import '../assets/login.css'
const Login = ({ onSwitch }) => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p>Dont have an account? <span onClick={onSwitch}>Register here</span></p>
    </div>
  );
};

export default Login;
