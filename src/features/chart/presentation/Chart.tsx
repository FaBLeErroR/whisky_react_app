import Navbar from "../../../core/presentation/components/Navbar";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GroupChart from "./components/GroupChart";
import Footer from "../../../core/presentation/components/Footer";
import SettingChart from "./components/SettingChart";
import { getBrandStatisticUseCase, getBottleStatisticUseCase } from "./../../../core/di/di";
import { StatisticEntity } from "../domain/entity/StatisticEntity";

type tSelect = "Бренд" | "Сорт";

function Chart() {
    const [group, setGroup] = useState<tSelect>("Бренд");
    const [groupData, setGroupData] = useState<any[]>([]);

    const [series, setSeries] = useState({
        "Количество отзывов": true,
        "Максимальная длина": false,
        "Средняя длина": false,
        "Минимальная длина": false,
    });

    const [isBar, setIsBar] = useState(true);

    const loadData = async () => {
        let result: StatisticEntity[];

        if (group === "Бренд") {
            result = await getBrandStatisticUseCase.execute();
        } else {
            result = await getBottleStatisticUseCase.execute();
        }

        // Маппинг Entity → Dataset для графика
        const mapped = result.map((r) => ({
            Группа: r.name,
            "Количество отзывов": r.review_count,
            "Максимальная длина": r.max_length,
            "Средняя длина": r.avg_length,
            "Минимальная длина": r.min_length,
        }));

        setGroupData(mapped);
    };

    useEffect(() => {
        loadData();
    }, [group]);

    const handleChange = (event: SelectChangeEvent) => {
        setGroup(event.target.value as tSelect);
    };

    return (
        <div>
            <Navbar active="3" />

            <Box sx={{ width: "200px", m: "20px auto" }}>
                <FormControl fullWidth>
                    <InputLabel>Группировать по</InputLabel>
                    <Select
                        id="select-group"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Бренд">Бренду</MenuItem>
                        <MenuItem value="Сорт">Сорт</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <GroupChart data={groupData} series={series} isBar={isBar} />

            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
            <Footer />
        </div>
    );
}

export default Chart;
