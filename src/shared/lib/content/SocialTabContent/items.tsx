import SocialButton from "@shared/ui/Buttons/SocialButton";
import { faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";

export interface TabItems {
    label: string;
    button?: React.ReactNode;
}

export const tabItems: TabItems[] = [
    { label: "Социальные сети" },
    {
        button: <SocialButton icon={faWalkieTalkie} href={'asd'} />,
        label: ""
    },
    { label: "Джинтропин" },
    { label: "Джинтропин" },
];