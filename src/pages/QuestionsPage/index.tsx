import React from "react";
import { Header } from "@features/Header";
import { QuestionsTab } from "../../features/Tab__Components/QuestionsTab";
import { Footer } from "@widgets/HomePage/Footer";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import styles from "./styles.module.scss";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { SideMenu } from "@features/SideMenu";

export const QuestionsPage = () => {
  return (
    <div className={styles.question}>
      <div className={styles.pc}>
        <Header />
        <QuestionsTab />
        <div className={styles.footer}>
          <Footer />
        </div>
        <SideMenu />
      </div>
      <div className={styles.mob}>
        <HeaderMobile />
        <QuestionsTab />
        <div className={styles.footer}>
          <FooterMobile />
        </div>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
