import { useEffect, useState } from "react";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import {
    DataGrid, GridRowsProp, GridColDef
} from "@mui/x-data-grid";
import { getAllReviewsUseCase } from "./../../../../core/di/di";
import { ReviewEntity } from "./../../domain/entity/ReviewEntity";


function BuildingsGrid() {
    const [rows, setRows] = useState<GridRowsProp>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAllReviewsUseCase
            .execute()
            .then((entities: ReviewEntity[]) => {
                const mapped = entities.map((e) => ({
                    id: e.id,
                    Брэнд: e.brand,
                    Сорт: e.bottle,
                    Заголовок: e.title,
                    Отзыв: e.content,
                }));

                setRows(mapped);
            })
            .finally(() => setLoading(false));
    }, []);


    const columns: GridColDef[] = [
        { field: 'Брэнд', flex: 1 },
        { field: 'Сорт', flex: 1 },
        { field: 'Заголовок', flex: 1 },
        { field: 'Отзыв', flex: 3 },
    ];
    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}

export default BuildingsGrid;