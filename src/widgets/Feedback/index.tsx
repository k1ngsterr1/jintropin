import { SwiperFeedback } from "@features/Tab__Components/Feedback";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.feedback__heading}>ОТЗЫВЫ</h2>
      <Fade className={styles.feedback__animation}>
        <SwiperFeedback />
      </Fade>
    </div>
  );
};
export default Feedback;
