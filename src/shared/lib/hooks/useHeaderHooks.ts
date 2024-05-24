import { useEffect, useState } from "react";

export const useHeaderHooks = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return { isOpen, handleOpenMenu };
};

