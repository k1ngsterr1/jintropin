import { Header } from "@features/Header/index";
import { Advantages } from "@widgets/HomePage/Advantages";
import { Application } from "@widgets/HomePage/Application";
import { Choose } from "@widgets/HomePage/Choose";
import { Contraindications } from "@widgets/HomePage/Contraindications";
import { Main } from "@widgets/HomePage/Main";
import { VideoBlock } from "@widgets/HomePage/VideoBlock";
import { Certificate } from "@widgets/HomePage/Сertificate";
// import { Results } from "@widgets/HomePage/Results/index";
import { Form } from "@widgets/HomePage/Form/index";
import { Footer } from "../../widgets/HomePage/Footer/index";

import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import AdvantagesMobile from "@widgets/HomePage/Mobile/Advantages";
import ApplicationMobile from "@widgets/HomePage/Mobile/Application";
import { ChooseMobile } from "@widgets/HomePage/Mobile/Choose";
import { ContraindicationsMobile } from "@widgets/HomePage/Mobile/Contraindications";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import FormMobile from "@widgets/HomePage/Mobile/Form";
import MainMobile from "@widgets/HomePage/Mobile/Main";
import { VideoBlockMobile } from "@widgets/HomePage/Mobile/VideBlock";
import { CertificateMobile } from "@widgets/HomePage/Mobile/Сertificate";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mob}>
        <HeaderMobile />
        <MainMobile />
        <ApplicationMobile />
        <AdvantagesMobile />
        <ContraindicationsMobile />
        <VideoBlockMobile />
        <CertificateMobile />
        <ChooseMobile />
        <FormMobile />
        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <Main />
        <SideMenu />
        <Application />
        <Advantages />
        <Contraindications />
        <VideoBlock />
        <Certificate />
        <Choose />
        <Form />
        <Footer />
      </div>
      <ThemeSwitcher />
    </div>
  );
};
