import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { SpriteSVG } from "../../assets/img/SpriteSVG";
import S from "./header.module.scss";

const menuItems = [
  { name: "Деталі збору", href: "#details" },
  { name: "Про бригаду", href: "#about" },
  { name: "Навіщо нам потрібні дрони?", href: "#reason" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={S.header}>
      <div className="container">
        <nav className={S.header_nav}>
          <img className={S.header_logo} src={logo} alt="Logo" />
          <ul className={`${S.header_menu} ${isMenuOpen ? S.open : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index} className={S.header_item}>
                <a
                  href={item.href}
                  onClick={(e) => handleMenuItemClick(e, item.href)}
                  className={S.header_link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={S.header_burger}
            onClick={toggleMenu}
          >
            <SpriteSVG name={"burger"} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
