import PinGeoLogo from '../assets/Cassava.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function NavBar() {
  return (
    <header className="navbar">
   
      <a href="#" className="logo">
        <img src={PinGeoLogo} alt="Logo" height="100px" />
      </a>

     
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Favourites</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

export default NavBar;
