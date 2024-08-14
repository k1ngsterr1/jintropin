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

import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { Loader } from "@shared/ui/Loader";
import { Footer } from "@widgets/HomePage/Footer";
import AdvantagesMobile from "@widgets/HomePage/Mobile/Advantages";
import ApplicationMobile from "@widgets/HomePage/Mobile/Application";
import { ChooseMobile } from "@widgets/HomePage/Mobile/Choose";
import { ContraindicationsMobile } from "@widgets/HomePage/Mobile/Contraindications";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import FormMobile from "@widgets/HomePage/Mobile/Form";
import { VideoBlockMobile } from "@widgets/HomePage/Mobile/VideBlock";
import { CertificateMobile } from "@widgets/HomePage/Mobile/Сertificate";
import { useEffect, useState } from "react";
import MainMobile from "../../widgets/HomePage/Mobile/Main/index";
import styles from "./styles.module.scss";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
