import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
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

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
    return () => scroll.destroy();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  className={S.header_link}
                  onClick={() => setIsMenuOpen(false)}
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
