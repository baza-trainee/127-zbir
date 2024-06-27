import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import S from "./hero.module.scss";
const Hero = () => {
  return (
    <section className={S.hero}>
      <div className="container">
        <div className={S.hero_content}>
          <h1 className={S.hero_title}>
            Збір на дрони для 127-мої бригади ТРО ЗСУ
          </h1>
          <SupportShareButtons className="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
