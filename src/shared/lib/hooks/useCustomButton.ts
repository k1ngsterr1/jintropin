import { useRef } from 'react';

export const useCustomButton = () => {
    const splideRef = useRef(null);

    const goPrev = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('<');
        }
    };

    const goNext = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('>');
        }
    };

    return { splideRef, goPrev, goNext };
};

