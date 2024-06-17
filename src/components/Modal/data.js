import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import telegram from "../../assets/img/telegram.svg";
import linkedin from "../../assets/img/linkedin.svg";

export const socials = [
  {
    name: "Instagram",
    url: { instagram },
    alt: "Instagram icon",
    handler: "instagram",
    width: "51",
    height: "51",
    link: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    url: { facebook },
    alt: "Facebook icon",
    handler: "facebook",
    width: "51",
    height: "51",
  },
  {
    name: "Telegram",
    url: { telegram },
    alt: "Telegram icon",
    handler: "telegram",
    width: "51",
    height: "51",
  },
  {
    name: "Linkedin",
    url: { linkedin },
    alt: "Linkedin icon",
    handler: "linkedin",
    width: "51",
    height: "51",
  },
];
