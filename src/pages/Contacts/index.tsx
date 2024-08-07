import { Header } from "@features/Header";
import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/Header/Mobile/Header";
import { Footer } from "@widgets/HomePage/Footer";
import { FooterMobile } from "@widgets/HomePage/Mobile/Footer";
import { SideMenu } from "@features/SideMenu";
import FormMobile from "@widgets/HomePage/Mobile/Form";
import { Form } from "@widgets/HomePage/Form";
const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.mob}>
        <HeaderMobile />
        <div className={styles.block}>
          <FormMobile />
        </div>
        <FooterMobile />
      </div>
      <div className={styles.pc}>
        <Header />
        <div className={styles.block}>
          <Form />
        </div>
        <Footer />
        <SideMenu />
      </div>
    </div>
  );
};
export default ContactsPage;
