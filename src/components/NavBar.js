import React from 'react'
import '../styles/NavBar.css'
import {Link, useLocation} from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isPortfolio = location.pathname === "/portfolio";
  const isSkills = location.pathname === "/skills";
  const isContact = location.pathname === "/contact";

  return (
    <div className="controls">
        <Link to='/' className="navbarReactLink">
          <div className={`control control-1 ${isHome ? 'active-btn' : String.empty}`} data-id="home">
            <i className="fas fa-home"></i>
          </div>
        </Link>

        <Link to='/portfolio' className="navbarReactLink">
          <div className={`control control-2 ${isPortfolio ? 'active-btn' : String.empty}`} data-id="portfolio">
            <i className="fas fa-briefcase"></i>
          </div>
        </Link>

        <Link to='/skills' className="navbarReactLink">
          <div className={`control control-3 ${isSkills ? 'active-btn' : String.empty}`} data-id="portfolio">
            <i className="fas fa-school"></i>
          </div>
        </Link>

        <Link to='/contact' className="navbarReactLink">
          <div className={`control control-4 ${isContact ? 'active-btn' : String.empty}`} data-id="contact">
            <i className="fas fa-envelope-open"></i>
          </div>
        </Link>
    </div>
  )
}
