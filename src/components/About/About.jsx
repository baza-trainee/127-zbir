import { Slider } from "./Slider";
import S from "./about.module.scss";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className={`title ${S.about__title}`}>Про бригаду</h2>
        <Slider />
        <p>
          <span>
            <strong>
              127-ма окрема бригада територіальної оборони (127 ОБрТрО, в/ч
              А7383)-
            </strong>
          </span>
          кадроване в мирний час формування Сил територіальної оборони Збройних
          сил України у місті Харкові. Бригада перебуває у складі Регіонального
          управління «Схід» Сил ТрО.
        </p>
      </div>
    </section>
  );
};

export default About;
