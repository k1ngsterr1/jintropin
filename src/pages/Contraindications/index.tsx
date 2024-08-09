import { Header } from "@features/Header";
import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { Footer } from "@widgets/HomePage/Footer";
import { SideMenu } from "@features/SideMenu";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { ContraindicationsMobile } from "@widgets/HomePage/Mobile/Contraindications";
import { Contraindications } from "@widgets/HomePage/Contraindications";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
const ContraindicationsPage = () => {
  return (
    <div className={styles.contraindications}>
      <div className={styles.mob}>
        <HeaderMobile />
        <ContraindicationsMobile />
        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <Contraindications />
        <Footer />
        <SideMenu />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
export default ContraindicationsPage;
