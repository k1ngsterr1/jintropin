import { Header } from "@features/Header";
import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { Footer } from "@widgets/HomePage/Footer";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { SideMenu } from "@features/SideMenu";
import Verification from "@widgets/Verification";
import VerificationMobile from "@widgets/Verification/Mobile";
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
    </div>
  );
};
export default VerificationPage;
