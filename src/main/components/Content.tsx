import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import WhiskyCard from './WhiskyCard';

const cardData = [
    { data: structures[7], index: 7 },
    { data: structures[6], index: 6 },
    { data: structures[0], index: 0 },
    { data: structures[5], index: 5 }
];

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} >
                        <WhiskyCard whisky={item.data}
                            index={index}
                            bottleIndex={item.index}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;