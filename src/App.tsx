import styled from "styled-components";
import { ChartSection } from "./sections/ChartSection/ChartSection";
import { ListSection } from "./sections/ListSection/ListSection";
import { TransactionSection } from "./sections/TransactionSection/TransactionSection";
import { TransactionsHistorySection } from "./sections/TransactionsHistorySection/TransactionsHistorySections";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoriteSection } from "./sections/FavoriteSection/FavoriteSection";

const MasterWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "a a a a b b"
        "d e e e c c";
    gap: 10px;
`;

const Section1 = styled.div`
    grid-area: a;
`;
const Section2 = styled.div`
    grid-area: b;
`;
const Section3 = styled.div`
    grid-area: c;
`;
const Section4 = styled.div`
    grid-area: d;
`;
const Section5 = styled.div`
    grid-area: e;
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
            <Section3>
                <FavoriteSection />
            </Section3>
            <Section4>
                <TransactionSection />
            </Section4>
            <Section5>
                <TransactionsHistorySection />
            </Section5>
        </MasterWrapper>
    );
};
