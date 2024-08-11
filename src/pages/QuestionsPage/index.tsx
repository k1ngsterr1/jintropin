import { Header } from "@features/Header";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { QuestionsTab } from "../../features/Tab__Components/QuestionsTab";

export const QuestionsPage = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <QuestionsTab />
      <FooterMobile />
    </div>
  );
};
