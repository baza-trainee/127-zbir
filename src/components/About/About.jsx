import S from "./about.module.scss";

const About = () => {
  return (
    <section className={(S.about, "section")} id="about">
      <div className={(S.about, "container")}>
        <h2 className="title">Про бригаду</h2>
      </div>
    </section>
  );
};

export default About;
