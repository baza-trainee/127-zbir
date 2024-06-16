import { useState } from "react";
import S from "../Modals/Modals.module.scss";

const Modals = () => {
	const [isCopyText, setIsCopyText] = useState(false);

	const url = window.location.href;

	const handleShare = (socialMedia) => {
		let shareUrl = "";

		switch (socialMedia) {
			case "instagram":
				shareUrl = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
					url
				)}`;
				break;
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


	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const onClick = () => {
		navigator.clipboard.writeText(url);

		setIsCopyText(true);

		setTimeout(() => {
			setIsCopyText(false);
		}, 5000);
	};
	return (
		<div className="modal">
			<div className="modal-wraper">
				<div className="modal-content">
					<span className="close" onClick={closeModal}>
						&times;
					</span>
					<h3>Поділитися збором</h3>
					<ul className="modal-link">
						<li>
							<a
								className="link"
								href={handleShare("instagram")}
								target="_blank"
								rel="noreferrer"
							>
								<img src="/src/assets/img/instagram_logo.svg" alt="Instagram" />Instagram
							</a>
						</li>
						<li>
							<a
								className="link"
								href={handleShare("facebook")}
								target="_blank"
								rel="noreferrer"
							>
								<img src="/src/assets/img/Facebok.svg" alt="facebook" />Fcebook
							</a>
						</li>
						<li>
							<a
								className="link"
								href={handleShare("telegram")}
								target="_blank"
								rel="noreferrer"
							>
								<img src="/src/assets/img/telegram.svg" alt="Telegram" />Telegram
							</a>
						</li>
						<li>
							<a
								className="link"
								href={handleShare("linkedin")}
								target="_blank"
								rel="noreferrer"
							>
								<img src="/src/assets/img/linkedin.svg" alt="Linkedin" />Linkedin
							</a>
						</li>
					</ul>
					<button type="button" className="copyButton btn_primary"
						onClick={onClick}>
						{isCopyText ? (
							<p className="copy__text">Посилання скопійовано</p>
						) : (
							<div className="copyText">
								<p className="textCopy">Копіювати посилання</p>
							</div>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Modals;