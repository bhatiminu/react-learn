
import {Link, NavLink} from 'react-router-dom'
import './footer.css';

export default function Footer() {
    return (
       <footer className="footer">
  <div className="footer__container">
    <div className="footer__top">
      <div className="footer__logo-wrap">
        <Link to="/" className="footer__logo-link">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="footer__logo-image"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="footer__links-grid">
        <div className="footer__section">
          <h2 className="footer__heading">Resources</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">Home</Link>
            </li>
            <li className="footer__item">
              <Link to="/about" className="footer__link">About</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h2 className="footer__heading">Follow us</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/hiteshchoudhary" className="footer__link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">Discord</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h2 className="footer__heading">Legal</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="#" className="footer__link">Privacy Policy</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="footer__bottom">
      <div className="footer__social-icons">
        <Link to="#" className="footer__icon"><svg className="footer__svg">...</svg></Link>
        <Link to="#" className="footer__icon"><svg className="footer__svg">...</svg></Link>
        <Link to="#" className="footer__icon"><svg className="footer__svg">...</svg></Link>
        <Link to="#" className="footer__icon"><svg className="footer__svg">...</svg></Link>
        <Link to="#" className="footer__icon"><svg className="footer__svg">...</svg></Link>
      </div>
    </div>
  </div>
</footer> 
    );
}
