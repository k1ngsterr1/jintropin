import { SwiperFeedbackMobile } from "@features/Tab__Components/Feedback";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
const FeedbackMobile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.feedback}>
      <h2 className={styles.feedback__heading}>{t("feedback")}</h2>
      <Fade className={styles.feedback__animation}>
        <SwiperFeedbackMobile />
      </Fade>
    </div>
  );
};
export default FeedbackMobile;
