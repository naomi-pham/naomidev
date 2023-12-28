export const IconBannerArrow = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1"
        width="62"
        height="62"
        rx="31"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M35.314 41.3861L47.7273 29.3171L51 32.4991L32.9999 50L15 32.4991L18.2727 29.3171L30.6857 41.3861V14H35.314V41.3861Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconClose = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
