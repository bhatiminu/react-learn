
import {Link, NavLink} from 'react-router-dom'
import './header.css';

export default function Header() {
    return (
       <header className="header">
  <nav className="header__nav">
    <div className="header__container">
      <Link to="/" className="header__logo">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          className="header__logo-image"
          alt="Logo"
        />
      </Link>
      <div className="header__auth">
        <Link to="#" className="header__login">
          Log in
        </Link>
        <Link to="#" className="header__button">
          Get started
        </Link>
      </div>
      <div className="header__menu" id="mobile-menu-2">
        <ul className="header__menu-list">
          <li>
            <NavLink to="/"  className={({isActive}) =>`${isActive ? "header__menu-item--active" : "header__menu-item"} header__menu-item `} >
              Home
            </NavLink>
            </li><li>
            <NavLink to="/about"  className={({isActive}) =>`${isActive ? "header__menu-item--active" : "header__menu-item"} header__menu-item `} >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"  className={({isActive}) =>`${isActive ? "header__menu-item--active" : "header__menu-item"} header__menu-item `} >
              Contact
            </NavLink>
          </li>
            <li>
            <NavLink to="/github"  className={({isActive}) =>`${isActive ? "header__menu-item--active" : "header__menu-item"} header__menu-item `} >
              Github
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    );
}

