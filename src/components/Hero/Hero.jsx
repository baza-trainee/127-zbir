import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import S from "./hero.module.scss";
const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className={S.hero_title}>
          Збір на дрони для 127-мої бригади ТРО ЗСУ
        </h1>
        <SupportShareButtons />
      </div>
    </section>
  );
};

export default Hero;
