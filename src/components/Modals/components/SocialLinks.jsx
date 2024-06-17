import React from "react";
import { socialLinks } from "../data.json";

export const SocialLinks = () => {
  const handleShare = (platform) => {
    const urls = {
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      telegram: "https://web.telegram.org",
      linkedin: "https://www.linkedin.com",
    };

    return urls[platform];
  };
  return (
    <ul className="modal-link">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a
            className="link"
            href={handleShare(link.handler)}
            target="_blank"
            rel="noreferrer"
          >
            <img src={link.url} alt={link.alt} />
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
