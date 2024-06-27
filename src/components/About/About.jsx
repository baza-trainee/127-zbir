import { Slider } from "./Slider";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="title">Про бригаду</h2>
        <Slider />
        <p className="text">
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
