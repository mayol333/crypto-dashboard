import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    mode?: ButtonMode;
    disabled?: boolean;
}

export type ButtonMode = "primary" | "secondary";
