import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import WhiskyCard from './WhiskyCard';

const cardData = [structures[7], structures[6], structures[0], structures[5]]

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} >
                        <WhiskyCard building={ item } index={ index }/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;