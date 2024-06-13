import SupportShareButtons from "../SupportShareButtons/SupportShareButtons";
import S from "./reason.module.scss";

const Reason = () => {
  return (
    <section className="section reason">
      <div className="container">
        <h2 className="title">Навіщо нам потрібні дрони?</h2>
        <div className={S.reason__items}>
          <div className={S.reason__item}>
            <h3 className={S.subtitle}>Розвідка і спостереження</h3>
            <p className={S.reason__text}>Дрони дозволяють ефективно виявляти позиції противника, здійснювати розвідку місцевості та своєчасно реагувати на загрози.</p>
          </div>
          <div className={S.reason__item}>
            <h3 className={S.subtitle}>Забезпечення безпеки</h3>
            <p className={S.reason__text}>Використання дронів значно знижує ризик для життя наших військових, адже вони можуть виконувати небезпечні завдання дистанційно.</p>
          </div>
          <div className={S.reason__item}>
            <h3 className={S.subtitle}>Керування вогню</h3>
            <p className={S.reason__text}>Дрони допомагають точно наводити артилерійський вогонь на цілі, що підвищує ефективність наших атак і зменшує витрати боєприпасів.</p>
          </div>
          <div className={S.reason__item}>
            <h3 className={S.subtitle}>Моніторинг</h3>
            <p className={S.reason__text}> З їхньою допомогою можна оперативно контролювати ситуацію на полі бою та швидко приймати рішення.</p>
          </div>
        </div>
        <div className={S.reason__contribution}>
          <p>Ваш внесок може зробити різницю між життям і смертю для наших бійців. Кожна гривня наближає нас до перемоги і допомагає захистити нашу Батьківщину.</p>
          <p>Разом ми сильні! Підтримайте 127-у бригаду і допоможіть їм виконувати свої обов’язки з максимальною ефективністю.</p>
        </div>
        <div className={S.details__btn_wrapper}>
        <SupportShareButtons />
        </div>
      </div>
    </section>
  );
};

export default Reason;
