// App.js
import { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <div className={`flip-card ${isLogin ? 'login' : 'register'}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Login onSwitch={handleSwitch} />
          </div>
          <div className="flip-card-back">
            <Register onSwitch={handleSwitch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
