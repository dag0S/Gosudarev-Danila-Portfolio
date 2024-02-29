import { FC } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum IconsID {
  VK = "vk",
  TG = "tg",
  WHATS_APP = "WhatsApp",
}

interface IconsSVGProps {
  id: string;
}

const IconsSVG: FC<IconsSVGProps> = ({ id }) => {
  switch (id) {
    case IconsID.VK:
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0718 22.4856C7.87192 22.4856 3.19489 16.8641 3 7.51001H7.10744C7.24236 14.3757 10.2704 17.2839 12.6689 17.8835V7.51001H16.5366V13.4313C18.9051 13.1764 21.3932 10.4781 22.2327 7.51001H26.1004C25.4558 11.1677 22.7575 13.866 20.8387 14.9753C22.7575 15.8747 25.8307 18.2283 27 22.4856H22.7425C21.8281 19.6374 19.5497 17.4338 16.5366 17.1339V22.4856H16.0718Z"
            fill="#D200A3"
          />
        </svg>
      );
      break;
    case IconsID.TG:
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.51239 13.8488C11.418 11.2759 15.3559 9.57959 17.3263 8.76003C22.9521 6.42005 24.1211 6.01357 24.883 6.00014C25.0506 5.99719 25.4253 6.03872 25.668 6.23567C25.873 6.40197 25.9294 6.62661 25.9563 6.78428C25.9833 6.94195 26.0169 7.30112 25.9902 7.58177C25.6854 10.785 24.3662 18.5585 23.6951 22.1462C23.4111 23.6643 22.852 24.1733 22.3107 24.2231C21.1343 24.3314 20.2409 23.4457 19.1015 22.6988C17.3186 21.53 16.3113 20.8025 14.5807 19.662C12.5806 18.3439 13.8772 17.6195 15.017 16.4356C15.3153 16.1258 20.4986 11.4112 20.5989 10.9835C20.6115 10.93 20.6231 10.7306 20.5046 10.6253C20.3862 10.52 20.2114 10.556 20.0852 10.5847C19.9064 10.6253 17.0581 12.5079 11.5404 16.2326C10.7319 16.7877 9.99958 17.0582 9.34347 17.044C8.62016 17.0284 7.2288 16.6351 6.19447 16.2988C4.92583 15.8865 3.91753 15.6684 4.00533 14.9681C4.05106 14.6033 4.55341 14.2302 5.51239 13.8488Z"
            fill="#D200A3"
          />
        </svg>
      );
      break;
    case IconsID.WHATS_APP:
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.99998 27L4.68699 20.837C3.64598 19.033 3.09898 16.988 3.09998 14.891C3.10298 8.335 8.43799 3 14.993 3C18.174 3.001 21.16 4.24 23.406 6.488C25.651 8.736 26.887 11.724 26.886 14.902C26.883 21.459 21.548 26.794 14.993 26.794C13.003 26.793 11.042 26.294 9.30499 25.346L2.99998 27ZM9.59699 23.193C11.273 24.188 12.873 24.784 14.989 24.785C20.437 24.785 24.875 20.351 24.878 14.9C24.88 9.438 20.463 5.01 14.997 5.008C9.54499 5.008 5.10999 9.442 5.10799 14.892C5.10699 17.117 5.75899 18.783 6.85399 20.526L5.85499 24.174L9.59699 23.193ZM20.984 17.729C20.91 17.605 20.712 17.531 20.414 17.382C20.117 17.233 18.656 16.514 18.383 16.415C18.111 16.316 17.913 16.266 17.714 16.564C17.516 16.861 16.946 17.531 16.773 17.729C16.6 17.927 16.426 17.952 16.129 17.803C15.832 17.654 14.874 17.341 13.739 16.328C12.856 15.54 12.259 14.567 12.086 14.269C11.913 13.972 12.068 13.811 12.216 13.663C12.35 13.53 12.513 13.316 12.662 13.142C12.813 12.97 12.862 12.846 12.962 12.647C13.061 12.449 13.012 12.275 12.937 12.126C12.862 11.978 12.268 10.515 12.021 9.92C11.779 9.341 11.534 9.419 11.352 9.41L10.782 9.4C10.584 9.4 10.262 9.474 9.98999 9.772C9.71799 10.07 8.94999 10.788 8.94999 12.251C8.94999 13.714 10.015 15.127 10.163 15.325C10.312 15.523 12.258 18.525 15.239 19.812C15.948 20.118 16.502 20.301 16.933 20.438C17.645 20.664 18.293 20.632 18.805 20.556C19.376 20.471 20.563 19.837 20.811 19.143C21.059 18.448 21.059 17.853 20.984 17.729Z"
            fill="#D200A3"
          />
        </svg>
      );
      break;
    default:
      break;
  }
};

export default IconsSVG;
