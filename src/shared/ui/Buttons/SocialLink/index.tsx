import { IconType } from "react-icons";
import styles from "./styles.module.scss";
interface SocialButtonI extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
}
export const SocialLink: React.FC<SocialButtonI> = ({
  icon: Icon,
  href,
  ...props
}) => {
  return (
    <a className={styles.button} href={href} {...props}>
      <Icon className={styles.icon} />
    </a>
  );
};
