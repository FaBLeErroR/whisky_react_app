import Navbar from "../components/Navbar";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GroupGrid from "./components/GroupGrid";
import { tGroup, countries, years, types } from "./groupdata";
import GroupChart from "./components/GroupChart";
import Footer from "../components/Footer";
import SettingChart from "./components/SettingChart";

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
    const [group, setGroup] = useState<tSelect>("Страна");
    const [groupData, setGroupData] = useState<tGroup>(countries);

    const [series, setSeries] = useState({
        "Максимальная высота": true,
        "Средняя высота": false,
        "Минимальная высота": false,
    });
    const [isBar, setIsBar] = useState(true);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as tSelect;
        setGroup(value);

        if (value === "Страна") setGroupData(countries);
        if (value === "Год") setGroupData(years);
        if (value === "Тип") setGroupData(types);
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
                        <MenuItem value="Страна">Стране</MenuItem>
                        <MenuItem value="Год">Году</MenuItem>
                        <MenuItem value="Тип">Типу</MenuItem>
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
