import { Header } from "@features/Header";
import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { Footer } from "@widgets/HomePage/Footer";
import { SideMenu } from "@features/SideMenu";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import Feedback from "@widgets/Feedback";
import FeedbackMobile from "@widgets/Feedback/Mobile";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
const FeedbackPage = () => {
  return (
    <div className={styles.contraindications}>
      <div className={styles.mob}>
        <HeaderMobile />
        <FeedbackMobile />
        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <Feedback />
        <Footer />
        <SideMenu />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
export default FeedbackPage;
