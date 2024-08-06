import { Header } from "@features/Header/index";
import { Main } from "@widgets/HomePage/Main";
import { Application } from "@widgets/HomePage/Application";
import { Usage } from "@widgets/HomePage/Usage";
import { Advantages } from "@widgets/HomePage/Advantages";
import { Contraindications } from "@widgets/HomePage/Contraindications";
import { VideoBlock } from "@widgets/HomePage/VideoBlock";
import { Certificate } from "@widgets/HomePage/Сertificate";
import { Questions } from "@widgets/HomePage/Questions";
import { Choose } from "@widgets/HomePage/Choose";
// import { Results } from "@widgets/HomePage/Results/index";
import { Form } from "@widgets/HomePage/Form/index";
import { Footer } from "../../widgets/HomePage/Footer/index";

import styles from "./styles.module.scss";
import { SideMenu } from "@features/SideMenu";
import MainMobile from "@widgets/HomePage/Mobile/Main";
import ApplicationMobile from "@widgets/HomePage/Mobile/Application";
import AdvantagesMobile from "@widgets/HomePage/Mobile/Advantages";
import { ContraindicationsMobile } from "@widgets/HomePage/Mobile/Contraindications";
import { CertificateMobile } from "@widgets/HomePage/Mobile/Сertificate";
import FormMobile from "@widgets/HomePage/Mobile/Form";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mob}>
        {/* <HeaderMobile /> */}
        <MainMobile />
        <ApplicationMobile />
        <AdvantagesMobile />
        <ContraindicationsMobile />
        <CertificateMobile />
        <FormMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <Main />
        <SideMenu />
        <Application />
        <Usage />
        <Advantages />
        <Contraindications />
        <VideoBlock />
        <Certificate />
        <Questions />
        <Choose />
        {/* <Results /> */}
        <Form />
        <Footer />
      </div>
    </div>
  );
};
