import React from "react";
import Container from "@mui/material/Container";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { tGroup } from "../groupdata";
import { getValue } from "@testing-library/user-event/dist/utils";

type tSeries = {
    "Максимальная высота": boolean;
    "Средняя высота": boolean;
    "Минимальная высота": boolean;
};

type GroupProps = {
    data: tGroup;
    series: tSeries;
    isBar: boolean;
};

function GroupChart({ data, series, isBar }: GroupProps) {

    const chartSetting = {
        yAxis: [{ label: "Высота (м)" }],
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
