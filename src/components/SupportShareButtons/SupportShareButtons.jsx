import { useState } from "react";
import arrowSvg from "../../assets/img/arrow-up-right.svg";
import Modals from "../Modals/Modals";
import S from "../SupportShareButtons/supportShareButtons.module.scss";

const SupportShareButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className={S.btns}>
      <a
        href="https://www.monobank.ua"
        className="btn_primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Підтримати
      </a>
      <button className="btn_secondary" onClick={openModal}>
        Поділитися
        <img src={arrowSvg} alt="Arrow icon" className="arrow-icon" />
      </button>
      {isModalOpen &&
        <Modals closeModal={closeModal} />
      };
    </div>
  );
};
export default SupportShareButtons;