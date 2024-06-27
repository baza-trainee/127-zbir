import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import reason_data from "./data.json";
import S from "./reason.module.scss";

const Reason = () => {
  return (
    <section className={`section ${S.reason}`} id="reason">
      <div className="container">
        <h2 className="title">Навіщо нам потрібні дрони?</h2>
        <div className={S.reason__items}>
          {reason_data.map((reason, index) => (
            <div key={index}>
              <h3 className="subtitle">{reason.title}</h3>
              <p className="text">{reason.description}</p>
            </div>
          ))}
        </div>

        <p className={S.reason__contribution}>
          Ваш внесок може зробити різницю між життям і смертю для наших бійців.
          Кожна гривня наближає нас до перемоги і допомагає захистити нашу
          Батьківщину.
          <br />
          <br />
          Разом ми сильні! Підтримайте 127-у бригаду і допоможіть їм виконувати
          свої обов&apos;язки з максимальною ефективністю.
        </p>

        <SupportShareButtons />
      </div>
    </section>
  );
};

export default Reason;
