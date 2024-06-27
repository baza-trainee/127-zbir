import { useState } from "react";
import { DONATION_URL } from "../../const/consts";
import { SpriteSVG } from "../../assets/img/SpriteSVG";
import { Modal } from "../Modal/Modal";
import S from "./supportShareButtons.module.scss";

const SupportShareButtons = ({ className }) => {
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
        href={DONATION_URL}
        className="btn_primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Підтримати
      </a>
      <button
        className={`btn_secondary ${className} ? 'hero' : ''`}
        onClick={openModal}
      >
        Поділитися
        <SpriteSVG name={"arrow"} />
      </button>
      {isModalOpen && (
        <Modal isOpen={openModal} onClose={closeModal}>
          <h1>kghkg</h1>
        </Modal>
      )}
    </div>
  );
};

export default SupportShareButtons;
