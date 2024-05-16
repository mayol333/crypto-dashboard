import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TimePeriodSelector } from "../../components/TimePeriodSelector/TimePeriodSelector";
import { Select } from "../../ui/Select/Select";
import { Period, generateChartData } from "../../data/dates";

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
    const [period, setPeriod] = useState<Period>("threeDays");
    const [dates, rates] = generateChartData(period);
    const [rate, setRate] = useState(0);
    const chartRef = useRef(null);
    const handleButtons = (value: Period) => {
        setPeriod(value);
    };
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const options = {
            xAxis: {
                type: "category",
                data: [...dates].reverse(),
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
        setRate(currentRate);
        setInterval(() => {
            const difference = Math.floor(Math.random() * 101);
            const directionOfRate = Math.random() < 0.5 ? 1 : -1;
            // const calculatedRate = currentRate + difference * directionOfRate;
            setRate((prevRate) => {
                if (directionOfRate > 0) {
                    return prevRate + difference;
                } else return prevRate - difference;
            });
        }, 10000);
    }, [currentRate]);
    console.log(rate);
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
                    <Rate>${rate}</Rate>
                    <RateChange $isPercentagePositive={isPercentagePositive}>
                        <span>
                            {rateSign}
                            {rateDifferencePercentage}%
                        </span>
                    </RateChange>
                </PriceWrapper>
                <TimePeriodSelector
                    handleButtons={handleButtons}
                    period={period}
                />
            </Wrapper>
            <Chart ref={chartRef}></Chart>
        </Container>
    );
};
