import { AdvantagesCards } from "@shared/ui/AdvantagesCards";
import styles from "./styles.module.scss";
import { items } from "@shared/lib/content/AdvantagesCardsContent";
const ApplicationMobile = () => {
  return (
    <section className={styles.application}>
      <h2 className={styles.application__heading}>
        ОБЛАСТИ ПРИМЕНЕНИЯ{" "}
        <span className={styles.application__heading__span}>ДЖИНТРОПИНА</span>
      </h2>
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
