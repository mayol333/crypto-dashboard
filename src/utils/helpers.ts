export const calculateRate = (rates: number[]) => {
    const lastRate = rates.at(-1) ?? 0;
    const firstRate = rates.at(0) ?? 0;
    const difference = lastRate - firstRate;
    const sum = (difference / firstRate) * 100;
    return sum.toFixed(2);
};
