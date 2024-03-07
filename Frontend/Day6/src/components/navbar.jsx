import '../assets/navbar.css'
import { Link } from 'react-router-dom'
import AnimatedSidenav from './sidebar'
const Navbar = () =>{
    return(
<div className="nav">
    <AnimatedSidenav/>
    <h2 className='nav-h2'>myboat.com</h2>
    <ul>
        <Link className='l1' to="/"><li>Login/Register</li></Link>
    </ul>
    
</div>
    )
}
export default Navbar