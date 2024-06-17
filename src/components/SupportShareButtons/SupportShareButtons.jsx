import { useState } from "react";
import { DONATION_URL } from "../../const/consts";
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
        <svg
          className="arrow-icon"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow-up-right">
            <path
              id="Vector"
              d="M14 34L34 14M34 14H14M34 14V34"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      {isModalOpen && <Modals closeModal={closeModal} />}
    </div>
  );
};

export default SupportShareButtons;
