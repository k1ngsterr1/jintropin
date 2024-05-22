import React from 'react';
import { Link } from 'react-scroll';
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
        <Link
            className={buttonClass}
            to={to}
            {...rest}
        >
            {text}
        </Link>
    );
};

export default LinkButton;

// Usage Example:
// <LinkButton
//   margin='mb-4'
//   text='Click Me'
//   to='targetSection'
//   buttonType='filled'
//   onClick={() => console.log('Navigating to section')}
// />