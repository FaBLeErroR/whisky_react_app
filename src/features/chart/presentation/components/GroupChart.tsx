import React from "react";
import Container from "@mui/material/Container";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

type tSeries = {
    'Количество отзывов': boolean,
    'Максимальная длина': boolean,
    'Средняя длина': boolean,
    'Минимальная длина': boolean,
};

type tGroup = {
    id?: number; 
    Группа: string;
    "Количество отзывов": number;
    "Максимальная длина": number;
    "Средняя длина": number;
    "Минимальная длина": number;
}[];

type GroupProps = {
    data: tGroup;
    series: tSeries;
    isBar: boolean;
};

function GroupChart({ data, series, isBar }: GroupProps) {

    const chartSetting = {
        yAxis: [{ label: "Длина(Колличество) отзывов" }],
        height: 400,
    };

    const seriesY = Object.entries(series)
        .filter(([, value]) => value)
        .map(([key]) => ({
            dataKey: key,
            label: key,
        }));

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: "band", dataKey: "Группа" }]}
                    series={seriesY}
                    barLabel={seriesY.length === 1 ? "value" : undefined}
                    slotProps={{
                        legend: {
                            position: { vertical: "bottom", horizontal: "center" },
                        },
                    }}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: "band", dataKey: "Группа" }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: "bottom", horizontal: "center" },
                        },
                    }}
                    {...chartSetting}
                />
            )}
        </Container>
    );
}

export default GroupChart;
