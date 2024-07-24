import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconDefinition;
    href: string;
}

export const SocialButton: React.FC<SocialButtonI> = ({ icon, href }) => {
    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}
