
import FlipCard from "./components/card";
import { BrowserRouter as  Router,  Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<FlipCard/>} />    
    </Routes>
    </Router>
  );
};

export default App;
