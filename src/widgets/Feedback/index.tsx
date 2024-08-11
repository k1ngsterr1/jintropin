import { SwiperFeedback } from "@features/Tab__Components/Feedback";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.feedback}>
      <h1 className={styles.feedback__heading}>{t("feedback")}</h1>
      <Fade className={styles.feedback__animation}>
        <SwiperFeedback />
      </Fade>
    </div>
  );
};
export default Feedback;
