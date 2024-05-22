import { useEffect, useState } from "react";
import { Menu } from '@features/Menu/index'
import { BurgerButton } from '@shared/ui/Buttons/BurgerButton'
import { useBurgerButtonAnimation } from "@shared/lib/hooks/useBurgerButtonAnimation";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { navLinks } from "@shared/lib/content/links";
import Button from "@shared/ui/Buttons/ReactButton";

import styles from './styles.module.scss'

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { menuRef } = useMenuAnimation(isOpen);
    const { firstLine, secondLine, thirdLine } = useBurgerButtonAnimation(isOpen);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <header className={styles.header_mob}>
                <div className={styles.header_mob__items}>
                    <p className="text-primary">Logo</p>
                    <Menu isOpen={isOpen} menuRef={menuRef} />
                    <BurgerButton
                        isOpen={isOpen}
                        onClick={handleOpenMenu}
                        firstLine={firstLine}
                        secondLine={secondLine}
                        thirdLine={thirdLine} />
                </div>
            </header>
            <header className={styles.header_pc}>
                <div className={styles.header_pc__items}>
                    <p className="text-primary">Logo</p>
                    <nav className="flex items-center gap-4 ">
                        {navLinks.map((link) => (
                            <a href={link.href} className={styles.header_pc__link}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <Button text="zhop" />
                </div>
            </header>
        </>
    )
}
