import React, { useState } from "react";
import logo from "../assets/logo.png"; // Adjust path as needed

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
  expanded?: boolean;
}

interface FooterProps {
  groups: FooterLinkGroup[];
  brandName?: string;
  brandYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  groups,
  brandName = "Kunzy",
  brandYear = new Date().getFullYear(),
}) => {
  const [expandedGroups, setExpandedGroups] = useState<boolean[]>(
    groups.map((group) => !!group.expanded)
  );

  const toggleGroup = (index: number) => {
    setExpandedGroups((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <footer className="block block--dark footer">
      <div className="container grid footer__sections">
        {groups.map((group, index) => (
          <section
            key={index}
            className={`collapsible footer__section ${
              expandedGroups[index] ? "collapsible--expanded" : ""
            }`}
          >
            <header
              className="collapsible__header"
              onClick={() => toggleGroup(index)}
            >
              <h2 className="collapsible__heading footer__heading">
                {group.title}
              </h2>
              <svg className="icon icon--white collapsible__chevron">
                <use xlinkHref="images/chevron.svg#"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="footer__brand">
          <img src={logo} alt="Brand logo" />
          <p className="footer__copyright">
            Copyright {brandYear} {brandName}
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
