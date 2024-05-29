import React from 'react';
import { videoCardsData } from '@shared/lib/content/VideoCardsContent';
import VideoCards from '@entities/VideoCards';

import styles from './styles.module.scss';

export const UsageTab: React.FC = () => {
    return (
        <div className={styles.container}>
            {videoCardsData.map((data, index) => (
                <VideoCards
                    key={index}
                    title={data.title}
                    backgroundImage={data.backgroundImage}
                    buttonLabel={data.buttonLabel}
                    buttonUrl={data.buttonUrl}
                    separatorType={data.separatorType}
                    headingStyleType={index % 2 === 0 ? 'blue' : 'yellow'}
                    separatorStyleType={index % 2 === 0 ? 'blue' : 'yellow'}
                    buttonStyleType={index % 2 === 0 ? 'blue' : 'yellow'}
                />
            ))}
        </div>
    );
};
