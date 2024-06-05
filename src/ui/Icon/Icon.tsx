import { ReactNode } from "react";
import UpArrow from "../../assets/arrow_up_icon.svg?react";
import DownArrow from "../../assets/arrow_down_icon.svg?react";

type IconType = "upArrow" | "downArrow";
interface IconProps {
    type: IconType;
}
export const Icon = ({ type }: IconProps) => {
    const icons: Record<IconType, ReactNode> = {
        upArrow: <UpArrow />,
        downArrow: <DownArrow />,
    };
    return <div>{icons[type]}</div>;
};
