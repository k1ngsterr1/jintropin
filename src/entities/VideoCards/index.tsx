import React from 'react';

import styles from './styles.module.scss';

interface Props {
    title: string;
    buttonUrl: string;
    buttonLabel: string;
    backgroundImage: string;
    headingStyleType?: 'yellow' | 'blue';
    separatorStyleType?: 'yellow' | 'blue';
    buttonStyleType?: 'yellow' | 'blue';
}

const VideoCards: React.FC<Props> = ({
    title,
    buttonUrl,
    buttonLabel,
    backgroundImage,
    headingStyleType = 'yellow',
    separatorStyleType = 'yellow',
    buttonStyleType = 'yellow'
}) => {
    return (
        <div className={styles.container}>
            <img src={backgroundImage} alt="" />
            <div className={styles.container__items}>
                <div><hr className={styles[`separator--${separatorStyleType}`]} /></div>
                <h1 className={`${styles.container__items__heading} ${styles[`heading--${headingStyleType}`]}`}>{title}</h1>
            </div>
            <a className={`${styles.container__btn} ${styles[`button--${buttonStyleType}`]}`} href={buttonUrl}>
                {buttonLabel}
            </a>
        </div>
    );
};

export default VideoCards;
