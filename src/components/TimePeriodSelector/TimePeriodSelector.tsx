import styled from "styled-components";
import { Button } from "../../ui/Button/Button";
import { TimePeriodSelectorProps } from "./types";

const Container = styled.div`
    display: flex;
    gap: 10px;
`;
export const TimePeriodSelector = ({
    handleButtons,
    period,
}: TimePeriodSelectorProps) => {
    return (
        <Container>
            <Button
                onClick={() => handleButtons("oneDay")}
                mode={period === "oneDay" ? "primary" : "secondary"}
            >
                1d
            </Button>
            <Button
                onClick={() => handleButtons("threeDays")}
                mode={period === "threeDays" ? "primary" : "secondary"}
            >
                3d
            </Button>
            <Button
                onClick={() => handleButtons("fiveDays")}
                mode={period === "fiveDays" ? "primary" : "secondary"}
            >
                5d
            </Button>
            <Button
                onClick={() => handleButtons("week")}
                mode={period === "week" ? "primary" : "secondary"}
            >
                1w
            </Button>
            <Button
                onClick={() => handleButtons("month")}
                mode={period === "month" ? "primary" : "secondary"}
            >
                1m
            </Button>
        </Container>
    );
};
