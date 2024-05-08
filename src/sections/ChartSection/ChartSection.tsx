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

const RateChange = styled.p`
    color: ${({ theme }) => theme.colors.increase};
    font-weight: bold;
`;
const rateChange = "+";

export const ChartSection = () => {
    const [period, setPeriod] = useState<Period>("threeDays");
    const [dates, rates] = generateChartData(period);
    console.log(rates.length);
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
                    <Rate>$58.144,80</Rate>
                    <RateChange>
                        <span>{rateChange}</span>12,23%
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
