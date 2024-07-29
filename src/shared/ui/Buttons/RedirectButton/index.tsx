import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    margin?: string;
    text: string;
    to: string;
    buttonType: 'filled' | 'outline';
}

export const LinkButton: React.FC<ButtonLinkProps> = ({
    margin,
    text,
    to,
    buttonType,
    ...rest
}) => {
    const buttonClass = `${styles.button} ${styles['button--' + buttonType]} ${margin || ''}`;

    return (
        <Link
            className={buttonClass}
            to={to}
            {...rest}
        >
            {text}
        </Link>
    );
};
