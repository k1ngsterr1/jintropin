import { AdvantagesCards } from "@shared/ui/AdvantagesCards";
import styles from "./styles.module.scss";
import { items } from "@shared/lib/content/AdvantagesCardsContent";
import { Fade } from "react-awesome-reveal";
const ApplicationMobile = () => {
  return (
    <section className={styles.application}>
      <Fade className={styles.application__animation} delay={0.3}>
        <h2 className={styles.application__heading}>
          ОБЛАСТИ ПРИМЕНЕНИЯ{" "}
          <span className={styles.application__heading__span}>ДЖИНТРОПИНА</span>
        </h2>
      </Fade>
      <div className={styles.application__container}>
        {items.map((item, index) => (
          <AdvantagesCards
            key={index}
            image={item.image}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};
export default ApplicationMobile;
