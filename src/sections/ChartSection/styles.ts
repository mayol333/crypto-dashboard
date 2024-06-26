import styled from "styled-components";

export const Chart = styled.div`
    width: 100%;
    height: 500px;
`;
export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: ${({ theme }) => theme.gridUnit * 4}px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
`;

export const Rate = styled.p`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.size.xxl * 2}px;
`;

export const RateChange = styled.p<{ $isPercentagePositive: boolean }>`
    color: ${({ theme, $isPercentagePositive }) =>
        $isPercentagePositive ? theme.colors.increase : theme.colors.decrease};
    font-weight: bold;
`;
