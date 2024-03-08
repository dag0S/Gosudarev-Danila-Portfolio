import { FC } from "react";

import styles from "./ButtonChat.module.scss";

const ButtonChat: FC = () => {
  VK.Widgets.CommunityMessages("vk-chat", 225007185);

  return <div className={styles["btn"]} id="vk-chat" />;
};

export default ButtonChat;
