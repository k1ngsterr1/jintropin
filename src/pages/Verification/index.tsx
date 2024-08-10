import { Header } from "@features/Header";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { Footer } from "@widgets/HomePage/Footer";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import Verification from "@widgets/Verification";
import VerificationMobile from "@widgets/Verification/Mobile";
import styles from "./styles.module.scss";

const VerificationPage = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.mob}>
        <HeaderMobile />
        <VerificationMobile />
        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <Verification />
        <Footer />
        <SideMenu />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
export default VerificationPage;
