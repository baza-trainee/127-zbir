import S from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className="section container">
      <p className={`text ${S.footer_text}`}>
        Розробка Baza Trainee Ukraine 2024 &copy; Всі права захищені.
      </p>
    </footer>
  );
};
export default Footer;
