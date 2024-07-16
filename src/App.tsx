import styled from "styled-components";
import { ChartSection } from "./sections/ChartSection/ChartSection";
import { ListSection } from "./sections/ListSection/ListSection";
import { TransactionSection } from "./sections/TransactionSection/TransactionSection";
import { TransactionsHistorySection } from "./sections/TransactionsHistorySection/TransactionsHistorySections";
import { useLocalStorage } from "./hooks/useLocalStorage";

const MasterWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "a a b b c c"
        "d e e e f f";
    gap: 10px;
`;

const Section1 = styled.div`
    grid-area: a;
`;
const Section2 = styled.div`
    grid-area: b;
`;
const Section3 = styled.div`
    background-color: red;
    grid-area: c;
`;
const Section4 = styled.div`
    grid-area: d;
`;
const Section5 = styled.div`
    grid-area: e;
`;
const Section6 = styled.div`
    background-color: red;
    grid-area: f;
`;

export const App = () => {
    useLocalStorage();

    return (
        <MasterWrapper>
            <Section1>
                <ChartSection />
            </Section1>
            <Section2>
                <ListSection />
            </Section2>
            <Section3></Section3>
            <Section4>
                <TransactionSection />
            </Section4>
            <Section5>
                <TransactionsHistorySection />
            </Section5>
            <Section6></Section6>
        </MasterWrapper>
    );
};
