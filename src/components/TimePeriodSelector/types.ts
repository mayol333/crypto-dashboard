import { Period } from "../../data/dates";

export interface TimePeriodSelectorProps {
    handleButtons: (value: Period) => void;
    period: Period;
}
