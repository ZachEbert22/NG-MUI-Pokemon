import { NavLink } from "react-router-dom";
import './NavBar.css'


export function NavBar() {
  return (
    <div className = "format">
      <nav className="navbar-container">
        <img src = "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" 
          alt="Loading..."
          className="img"></img>
        <NavLink to="/" className="Home">Home</NavLink>
        <NavLink to="/about" className="About">About</NavLink>
        <NavLink to="/contact" className="Contact">Rankings</NavLink>
        <NavLink to="/typing" className="Typing">Typing</NavLink>
      </nav>
    </div>
  );
}
