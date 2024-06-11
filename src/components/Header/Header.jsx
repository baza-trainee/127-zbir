import logo from "../../assets/img/logo.svg";
import S from "./header.module.scss";

const menuItems = [
  { name: "Деталі збору", href: "#details" },
  { name: "Про бригаду", href: "#about" },
  { name: "Навіщо нам потрібні дрони?", href: "#reason" },
];

const Header = () => {
  return (
    <header className={S.header}>
      <div className="container">
        <nav className={S.header_nav}>
          <a href="">
            <img src={logo} alt="Logo" />
          </a>
          <ul className={S.header_menu}>
            {menuItems.map((item, index) => (
              <li key={index} className={S.header_item}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
