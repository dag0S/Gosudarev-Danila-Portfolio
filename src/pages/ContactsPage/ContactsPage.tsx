import { FC } from "react";
import Title from "../../components/Title/Title";
import { contactsPageData } from "../../assets/data/data";
import Socials from "../../components/Socials/Socials";
import cn from "classnames";

import styles from "./ContactsPage.module.scss";
import ProgressiveImage from "../../components/ProgressiveImage/ProgressiveImage";

const ContactsPage: FC = () => {
  return (
    <section className={styles["contacts"]}>
      <div className="container">
        <div className={styles["contacts__inner"]}>
          <Title className={styles["contacts__title"]}>
            {contactsPageData.title}
          </Title>
          <div className={styles["contacts__wrap"]}>
            <div className={styles["contacts__left"]}>
              <ul className={styles["contacts__list"]}>
                <li>
                  <a
                    className={cn(styles["icon"], styles["icon--mail"])}
                    href={`mailto:${contactsPageData.email}`}
                  >
                    {contactsPageData.email}
                  </a>
                </li>
                <li>
                  <a
                    className={cn(styles["icon"], styles["icon--phone"])}
                    href={`tel:${contactsPageData.tel2.forLink}`}
                  >
                    {contactsPageData.tel2.tel}
                  </a>
                </li>
                <li>
                  <a
                    className={cn(styles["icon"], styles["icon--phone"])}
                    href={`tel:${contactsPageData.tel1.forLink}`}
                  >
                    {contactsPageData.tel1.tel}
                  </a>
                </li>
              </ul>
              <Socials />
            </div>
            <ProgressiveImage
              className={styles["contacts__img"]}
              placeholderSrc={contactsPageData.img.tiny}
              src={contactsPageData.img.src}
              alt={contactsPageData.img.alt}
            />
          </div>
        </div>
      </div>
      <div className={styles["contacts__gradient"]} />
    </section>
  );
};

export default ContactsPage;
