// const handleShare = (socialMedia) => {
//   let shareUrl = "";

//   switch (socialMedia) {
//     case "instagram":
//       shareUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
//         url
//       )}`;
//       break;
//     case "facebook":
//       shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//         url
//       )}`;
//       break;
//     case "telegram":
//       shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
//       break;
//     case "linkedin":
//       shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//         url
//       )}`;
//       break;
//     default:
//       console.log("Ця функція не підтримується в цьому браузері");
//       break;
//   }
//   return shareUrl;
// };
const [isCopied, setIsCopied] = useState(false);

const url = window.location.href;
