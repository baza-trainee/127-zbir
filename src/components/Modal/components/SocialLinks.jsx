import React from "react";
import socialLinks from "../data.json";
import S from "../modal.module.scss";

export const SocialLinks = () => {
  //   const handleShare = (platform) => {
  //     const urls = {
  //       instagram: "https://www.instagram.com",
  //       facebook: "https://www.facebook.com",
  //       telegram: "https://web.telegram.org",
  //       linkedin: "https://www.linkedin.com",
  //     };

  //     return urls[platform];
  //   };
  return (
    <ul className={S.modal__link}>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a className="link" href={link.url} target="_blank" rel="noreferrer">
            <img src={link.url} alt={link.alt} />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
