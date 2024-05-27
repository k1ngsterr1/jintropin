import React from 'react';

interface Props {
    title: string;
    separator: string;
    buttonUrl: string;
    buttonLabel: string;
    backgroundImage: string;
}

const VideoCards: React.FC<Props> = ({ title, separator, buttonUrl, buttonLabel, backgroundImage }) => {
    return (
        <div>
            <div className="">
                {backgroundImage}
                <h1>{title}</h1>
                <div>{separator}</div>
                <a href={buttonUrl} >
                    {buttonLabel}
                </a>
            </div>
        </div>
    );
};

export default VideoCards;
