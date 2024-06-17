export const SpriteSVG = ({ name }) => {
  switch (name) {
    case "close":
      return (
        <svg
          id="icon-close"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "burger":
      return (
        <svg
          id="icon-burger"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path
            d="M4 16H28M4 8H28M4 24H28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          id="arrow-up-right"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path
            d="M14 34L34 14M34 14H14M34 14V34"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return "SVG not found";
  }
};
