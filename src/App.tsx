import styled from "styled-components";
import { ChartSection } from "./sections/ChartSection/ChartSection";
import { ListSection } from "./sections/ListSection/ListSection";

const MasterWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
`;

const Section3 = styled.div`
    background-color: red;
`;
const Section4 = styled.div`
    background-color: red;
`;
const Section5 = styled.div`
    background-color: red;
`;
const Section6 = styled.div`
    background-color: red;
`;

export const App = () => {
    return (
        <MasterWrapper>
            <div>
                <ChartSection />
            </div>
            <div>
                <ListSection />
            </div>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
        </MasterWrapper>
    );
};
