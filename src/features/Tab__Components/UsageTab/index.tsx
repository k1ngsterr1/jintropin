import React from 'react';
import { videoCardsData } from '@shared/lib/content/VideoCardsContent';
import VideoCards from '@entities/VideoCards';

export const UsageTab: React.FC = () => {
    return (
        <div>
            {videoCardsData.map((data, index) => (
                <VideoCards
                    key={index}
                    title={data.title}
                    backgroundImage={data.backgroundImage}
                    buttonLabel={data.buttonLabel}
                    buttonUrl={data.buttonUrl}
                />
            ))}
        </div>
    );
};
