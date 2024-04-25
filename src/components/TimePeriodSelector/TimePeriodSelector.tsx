import styled from "styled-components";
import { Button } from "../../ui/Button/Button";

const Container = styled.div`
    display: flex;
    gap: 10px;
`;
export const TimePeriodSelector = () => {
    return (
        <Container>
            <Button>1d</Button>
            <Button mode="secondary">3d</Button>
            <Button mode="secondary">5d</Button>
            <Button mode="secondary">1w</Button>
            <Button mode="secondary">1m</Button>
        </Container>
    );
};
