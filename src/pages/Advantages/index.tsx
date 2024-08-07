import { Header } from "@features/Header";
import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import AdvantagesMobile from "@widgets/HomePage/Mobile/Advantages";
import { Advantages } from "@widgets/HomePage/Advantages";
import { Footer } from "@widgets/HomePage/Footer";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { SideMenu } from "@features/SideMenu";
const AdvantagesPage = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.mob}>
        <HeaderMobile />
        <AdvantagesMobile />
        <div className={styles.mob__footer}>
          <FooterMobile />
        </div>
      </div>
      <div className={styles.pc}>
        <Header />
        <Advantages />
        <Footer />
        <SideMenu />
      </div>
    </div>
  );
};
export default AdvantagesPage;
