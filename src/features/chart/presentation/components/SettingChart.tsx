import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

type tSeries = {
    'Количество отзывов': boolean,
    'Максимальная длина': boolean,
    'Средняя длина': boolean,
    'Минимальная длина': boolean,
}

type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<
        React.SetStateAction<tSeries>
    >
    isBar: boolean;
    setIsBar: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === "bar");
    };

    return (
        <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ m: "20px 0" }}
        >
            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={(isBar) ? "bar" : "dot"}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="bar"
                        control={
                            <Radio checked={isBar} />
                        }
                        label="Гистограмма"
                    />
                    <FormControlLabel value="dot"
                        control={
                            <Radio checked={!isBar} />
                        }
                        label="Линейная" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Количество отзывов"]}
                            onChange={handleCheckboxChange} name="Количество отзывов" />
                    }
                    label="количество отзывов" />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Максимальная длина"]}
                            onChange={handleCheckboxChange} name="Максимальная длина" />
                    }
                    label="максимальную длину" />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Средняя длина"]}
                            onChange={handleCheckboxChange} name="Средняя длина" />
                    }
                    label="среднюю длину" />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Минимальная длина"]}
                            onChange={handleCheckboxChange} name="Минимальная длина" />
                    }
                    label="минимальную длину" />
            </FormControl>
        </Stack>
    )
}

export default SettingChart;