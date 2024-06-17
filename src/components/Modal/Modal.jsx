import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SocialLinks } from "./components/SocialLinks";
import S from "./modal.module.scss";
import { SpriteSVG } from "../../assets/img/SpriteSVG";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, isOpen, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const url = window.location.href;
  const handleBackdropClick = (e) => {
    e.target === e.currentTarget ? onClose() : null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.key === "Escape" ? onClose() : null;
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return createPortal(
    <div className={S.modal} onClick={handleBackdropClick}>
      <div className={S.modal__wrapper}>
        <div className={S.modal__content}>
          <button type="button" className={S.modal__close} onClick={onClose}>
            <SpriteSVG name={"close"} />
          </button>
          <h3>Поділитися збором</h3>
          <SocialLinks />
          <button
            type="button"
            className="btn_primary"
            onClick={copyToClipboard}
            disabled={isCopied}
          >
            {isCopied ? "Скопійовано" : "Копіювати посилання"}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
