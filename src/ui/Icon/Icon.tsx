import { ReactNode } from "react";
import UpArrow from "../../assets/arrow_up_icon.svg?react";
import DownArrow from "../../assets/arrow_down_icon.svg?react";
import { IconProps, IconType } from "./types";

export const Icon = ({ type }: IconProps) => {
    const icons: Record<IconType, ReactNode> = {
        upArrow: <UpArrow />,
        downArrow: <DownArrow />,
    };
    return <div>{icons[type]}</div>;
};
