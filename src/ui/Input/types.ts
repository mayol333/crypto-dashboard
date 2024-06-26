import { ChangeEventHandler } from "react";

export interface InputProps {
    label?: string;
    error?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
