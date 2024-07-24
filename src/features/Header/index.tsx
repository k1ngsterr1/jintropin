import { Menu } from '@features/Menu/index'
import { BurgerButton } from '@shared/ui/Buttons/BurgerButton'
import { useBurgerButtonAnimation } from "@shared/lib/hooks/useBurgerButtonAnimation";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { navLinks } from "@shared/lib/content/links";
import Button from "@shared/ui/Buttons/ReactButton";
import ThemeSwitcher from "@shared/lib/hooks/useThemeSwitch";
import { useHeaderHooks } from "@shared/lib/hooks/useHeaderHooks";

import styles from './styles.module.scss'

export const Header = () => {
    const { isOpen, handleOpenMenu } = useHeaderHooks()
    const { menuRef } = useMenuAnimation(isOpen);
    const { firstLine, secondLine, thirdLine } = useBurgerButtonAnimation(isOpen);


    return (
        <>
            <header className={styles.header_mob}>
                <div className={styles.header_mob__items}>
                    <a href="" className="text-primary">Джинтропин</a>
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
                    <a href="" className={styles.header_pc__logo}>Джинтропин</a>
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a href={link.href} className={styles.header_pc__link}>
                                {link.label}
                            </a>
                        ))}
                        <ThemeSwitcher />
                        <Button text="Написать в Whatsapp" buttonType='outline' />
                        <Button text="Получить консультацию" buttonType='outline' />
                    </nav>
                </div>
            </header>
        </>
    )
}
