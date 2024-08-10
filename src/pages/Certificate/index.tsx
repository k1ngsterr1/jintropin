import { Header } from "@features/Header";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { Footer } from "@widgets/HomePage/Footer";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { CertificateMobile } from "@widgets/HomePage/Mobile/Сertificate";
import { Certificate } from "@widgets/HomePage/Сertificate";
import styles from "./styles.module.scss";
const CertificatePage = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.mob}>
        <HeaderMobile />
        <div className={styles.block}>
          <CertificateMobile />
        </div>

        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <div className={styles.block}>
          <Certificate />
        </div>
        <Footer />
        <SideMenu />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
export default CertificatePage;
