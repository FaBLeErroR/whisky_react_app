import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { tGroup } from "../groupdata";
import { ruRU } from '@mui/x-data-grid/locales';

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const columns: GridColDef[] = [
        { field: "Группа", headerName: "Группа", flex: 1 },
        { field: "Минимальная высота", flex: 1 },
        { field: "Максимальная высота", flex: 1 },
        { field: "Средняя высота", flex: 1 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: 600, mt: 4 }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={data}
                columns={columns}
            />
        </Container>
    );
}

export default GroupGrid;
