import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    mode?: ButtonMode;
}

export type ButtonMode = "primary" | "secondary";
