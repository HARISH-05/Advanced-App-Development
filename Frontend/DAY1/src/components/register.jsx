import '../assets/register.css'
const Register = ({ onSwitch }) => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
      <p>Already have an account? <span onClick={onSwitch}>Login here</span></p>
    </div>
  );
};

export default Register;
