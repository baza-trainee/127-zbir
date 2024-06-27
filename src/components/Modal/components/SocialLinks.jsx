import React from "react";
import socials from "../data.json";
import S from "../modal.module.scss";

export const SocialLinks = ({ url }) => {
  const handleShare = (socialMedia) => {
    let shareUrl = "";

    switch (socialMedia) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;

      default:
        console.log("Ця функція не підтримується в цьому браузері");
        break;
    }
    return shareUrl;
  };
  return (
    <ul className={S.modal__list}>
      {socials.map((link, index) => (
        <li key={index} className={S.modal__item}>
          <a
            className={S.modal__link}
            href={handleShare(link.handler)}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={link.url}
              alt={link.alt}
              className={S.modal__img}
              width={link.width}
              height={link.height}
            />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
