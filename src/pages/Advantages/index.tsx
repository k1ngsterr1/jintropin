import { Header } from "@features/Header";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { Advantages } from "@widgets/HomePage/Advantages";
import { Footer } from "@widgets/HomePage/Footer";
import AdvantagesMobile from "@widgets/HomePage/Mobile/Advantages";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import styles from "./styles.module.scss";

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
      <ThemeSwitcher />
    </div>
  );
};
export default AdvantagesPage;
