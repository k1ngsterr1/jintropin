import React from "react";
import { items } from "@shared/lib/content/AdvantagesCardsContent";
import { AdvantagesCards } from "@shared/ui/AdvantagesCards/index";

import styles from "./styles.module.scss";

const ItemsGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <AdvantagesCards
          image={item.image}
          title={item.title}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default ItemsGrid;
