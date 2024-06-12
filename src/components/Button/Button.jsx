const Button = ({ className, text, href, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      <button className={className}>{text}</button>
    </a>
  );
};

export default Button;
