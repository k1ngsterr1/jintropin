import React from 'react';
import styles from './styles.module.scss';

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    margin?: string;
    text: string;
    to: string;
    buttonType: 'filled' | 'outline';
}

const LinkButton: React.FC<ButtonLinkProps> = ({
    margin,
    text,
    to,
    buttonType,
    ...rest
}) => {
    const buttonClass = `${styles.button} ${styles['button--' + buttonType]} ${margin || ''}`;

    return (
        <a
            href={to}
            className={buttonClass}
            {...rest}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
};

export default LinkButton;
