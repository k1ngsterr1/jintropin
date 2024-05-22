import { navLinks } from "@shared/lib/content/links";
import Button from "@shared/ui/Buttons/ReactButton";

import styles from "./styles.module.scss";

interface IBurgerMenuProps {
    isOpen: boolean;
    menuRef: React.RefObject<HTMLDivElement>;
}

export const Menu: React.FC<IBurgerMenuProps> = ({ isOpen, menuRef }) => {
    return (
        <div className={styles.burger_menu} ref={menuRef}>
            {navLinks.map((link) => (
                <a href={link.href} className={styles.burger_menu__link}>
                    {link.label}
                </a>
            ))}
            <Button text='Submit' margin='mt-4' />
        </div>
    );
};