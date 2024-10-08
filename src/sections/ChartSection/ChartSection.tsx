import * as echarts from "echarts";
import { useEffect, useRef } from "react";
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
import {
    Chart,
    Container,
    PriceWrapper,
    Rate,
    RateChange,
    Wrapper,
} from "./styles";
import { calculateRate } from "../../utils/helpers";

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
                />
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
