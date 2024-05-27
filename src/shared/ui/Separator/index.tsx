import React from 'react';
import styles from './styles.module.scss';

interface HRProps {
    className?: string;
    separatorType: 'yellow' | 'blue';
}

export const HorizontalRule: React.FC<HRProps> = ({ className = '', separatorType }) => {
    const separatorClass = `${styles.separator} ${styles[`separator--${separatorType}`]} ${className}`;
    return (
        <hr className={separatorClass} />
    );
}
