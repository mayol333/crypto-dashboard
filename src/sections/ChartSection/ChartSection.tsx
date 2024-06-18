import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { TimePeriodSelector } from "../../components/TimePeriodSelector/TimePeriodSelector";
import { Select } from "../../ui/Select/Select";
import { generateChartData } from "../../data/dates";
import { getInitialData } from "../../store/data/dataThunk";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
    removeFirst,
    updateDates,
    updateRates,
} from "../../store/data/dataSlice";

const Chart = styled.div`
    height: 100%;
    width: 100%;
`;
const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: ${({ theme }) => theme.gridUnit * 4}px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
`;

const Rate = styled.p`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.size.xxl * 2}px;
`;

const RateChange = styled.p<{ $isPercentagePositive: boolean }>`
    color: ${({ theme, $isPercentagePositive }) =>
        $isPercentagePositive ? theme.colors.increase : theme.colors.decrease};
    font-weight: bold;
`;

const calculateRate = (rates: number[]) => {
    const lastRate = rates.at(-1) ?? 0;
    const firstRate = rates.at(0) ?? 0;
    const difference = lastRate - firstRate;
    const sum = (difference / firstRate) * 100;
    return sum.toFixed(2);
};

export const ChartSection = () => {
    const dispatch = useAppDispatch();
    const {
        dates: initialDates,
        rates: initialRates,
        period,
    } = useAppSelector(({ data }) => data);
    const [dates, rates] = generateChartData(
        period,
        initialRates,
        initialDates
    );
    const chartRef = useRef(null);
    useEffect(() => {
        dispatch(getInitialData());
    }, [dispatch]);
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const options = {
            tooltip: {
                trigger: "axis",
            },
            xAxis: {
                type: "category",
                data: dates,
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: rates,
                    type: "line",
                },
            ],
        };
        chart.setOption(options);
        return () => {
            chart.dispose();
        };
    }, [dates, rates]);
    const currentRate = rates.at(-1) ?? 0;
    const rateDifferencePercentage = calculateRate(rates);
    const isPercentagePositive = Number(rateDifferencePercentage) > 0;
    const rateSign = isPercentagePositive ? "+" : "";
    useEffect(() => {
        setInterval(() => {
            dispatch(updateDates());
            dispatch(updateRates());
            dispatch(removeFirst());
        }, 10000);
    }, [dispatch]);
    return (
        <Container>
            <Wrapper>
                <Select
                    placeholder="Currency"
                    onChange={() => {
                        null;
                    }}
                    options={[
                        { label: "BitCoin", value: "BitCoin" },
                        { label: "Ethereum", value: "Ethereum" },
                    ]}
                ></Select>
                <PriceWrapper>
                    <Rate>${currentRate}</Rate>
                    <RateChange $isPercentagePositive={isPercentagePositive}>
                        <span>
                            {rateSign}
                            {rateDifferencePercentage}%
                        </span>
                    </RateChange>
                </PriceWrapper>
                <TimePeriodSelector />
            </Wrapper>
            <Chart ref={chartRef}></Chart>
        </Container>
    );
};
