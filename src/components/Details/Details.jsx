import { useState, useEffect } from "react";
import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import getBalance from "../../helpers/getBalance";
import { formatNumber } from "../../helpers/formattedNum";
import S from "./details.module.scss";

const Details = () => {
  // const value = 2015.52;
  const [balance, setBalance] = useState(0);
  const formattedValue = formatNumber(balance);
  const max = 70000;
  const isComplete = balance >= max;

  useEffect(() => {
    getBalance(setBalance);
  }, []);

  return (
    <section className="section" id="details">
      <div className="container">
        <h2 className="title">Деталі збору</h2>
        <div className={S.details__wrapper}>
          <div className={S.details__img}></div>
          <p className={`text ${S.details__text}`}>
            127-ма бригада ЗСУ розпочала збір коштів на придбання дронів, які є
            критично важливими для нашої обороноздатності. Ми прагнемо зібрати
            70,000 грн для закупівлі сучасних дронів, які допоможуть нашим
            військовим у виконанні бойових завдань та забезпеченні безпеки наших
            захисників
          </p>
        </div>
        <div className={S.details__collect_wrapper}>
          <p className={S.details__collect}>
            Зібрано:{" "}
            <span>
              <strong>{formattedValue} грн </strong>
            </span>
          </p>
          <p className={S.details__collect}>
            з
            <span className={S.details__total}>
              <strong className={S.details__total}> 70 000 грн</strong>
            </span>
          </p>
        </div>
        <progress
          value={balance}
          max={max}
          className={`${S.details__progress} ${
            isComplete ? S.details__progress_complete : ""
          }`}
        ></progress>
        {isComplete && (
          <p className={S.details__done}>
            <strong>Збір завершено</strong>
          </p>
        )}
        <SupportShareButtons />
      </div>
    </section>
  );
};

export default Details;
