import React from 'react';
import styles from './styles.module.scss';

interface Props {
    text: string;
    margin?: string;
    align?: string;
    width?: string;
    lineHeight?: string;
    paragraphType: 'white' | 'dark';
}

const Paragraph: React.FC<Props> = ({ text, margin, width, align, lineHeight, paragraphType }) => {
    const paragraphClass = `${styles.paragraph} ${styles[`paragraph--${paragraphType}`]
        } ${margin || ''} ${align || ''}`;

    return (
        <p className={paragraphClass} style={{ width, lineHeight }}>
            {text}
        </p>
    );
}

export default Paragraph;
