import S from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className="section container">
      <p className={`text ${S.footer_text}`}>
        &copy; Розробка Baza Trainee Ukraine 2024. Всі права захищені.
      </p>
    </footer>
  );
};
export default Footer;
