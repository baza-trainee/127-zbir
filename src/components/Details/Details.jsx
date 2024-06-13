import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import S from "./details.module.scss";

const Details = () => {
  return (
    <section className="section" id="details">
      <div className="container">
        <h2 className="title">Деталі збору</h2>
        <div className={S.details__wrapper}>
          <div className={S.details__img}></div>
          <p className={`text ${S.details__text}`}>
            127-ма бригада ЗСУ розпочала збір коштів на придбання дронів, які є
            критично важливими для нашої обороноздатності. Ми прагнемо зібрати
            48,000 грн для закупівлі сучасних дронів, які допоможуть нашим
            військовим у виконанні бойових завдань та забезпеченні безпеки наших
            захисників
          </p>
        </div>
        <div className={S.details__collect_wrapper}>
          <p className={S.details__collect}>
            Зібрано:{" "}
            <span>
              <strong> 0 грн </strong>
            </span>
          </p>
          <p className={S.details__collect}>
            з
            <span className={S.details__total}>
              <strong className={S.details__total}> 48 000 грн</strong>
            </span>
          </p>
        </div>

        <progress
          value={20000}
          max={48000}
          className={S.details__progress}
        ></progress>
        <SupportShareButtons />
      </div>
    </section>
  );
};

export default Details;
