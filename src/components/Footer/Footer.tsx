import React, { memo } from "react";
import { Link } from "react-router-dom";
import chevronUp from "../../assets/icons/chevron-up.svg";
import { Logo } from "../Logo";
import "./Footer.scss";

const navLinks = ["github", "contacts", "rights"];

export const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo />
        </div>
        <nav className="footer__navigation">
          <ul className="footer__list">
            {navLinks.map((navLink) => (
              <li className="footer__list-item" key={navLink}>
                <Link to="/" className="footer__link">
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__toTop">
          <p className="footer__toTop-label">Back to top</p>
          <button type="submit" className="footer__toTop-button">
            <img
              className="footer__toTop-icon"
              src={chevronUp}
              alt="back to top"
            />
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
