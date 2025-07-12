import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  navItems: NavItem[];
  brandHref?: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, brandHref = "/" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`nav collapsible ${isMenuOpen ? "collapsible--expanded" : ""}`}
    >
      <Link className="nav__brand" to={brandHref}>
        <img src={logo} alt="Logo" />
      </Link>

      <button
        className="nav__toggler"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        style={{
          fontSize: "2rem",
          background: "none",
          border: "none",
          color: "#fff",
        }}
      >
        ☰
      </button>

      <ul
        className="list nav__list collapsible__content"
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <li
            className={`nav__item ${
              location.pathname === item.href ? "active" : ""
            }`}
            key={item.href}
            role="menuitem"
          >
            <Link
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
