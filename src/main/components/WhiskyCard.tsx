import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface ComponentProps {
    whisky: {
        img: string,
        title: string,
        description: string[],
    };
    index: number;
    bottleIndex: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(2),
}));

function WhiskyCard({ whisky, index, bottleIndex }: ComponentProps) {

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: index % 2 === 1 ? 'row' : 'row-reverse',
                height: '400px',
            }}
        >
            <CardMedia
                component="img"
                alt={whisky.title}
                image={whisky.img}
            />
            <Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        {whisky.title}
                    </Typography>
                    {whisky.description.map((item, ind) => (
                        <StyledTypography key={ind} variant="body2">
                            {item}
                        </StyledTypography>
                    ))}
                </CardContent>
                <Link key={index} to={"/whisky/" + bottleIndex}
                    style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}
                >
                    <CardActions sx={{ justifyContent: index % 2 === 1 ? 'end' : 'start' }}>
                        <Button size="small">Подробнее</Button>
                    </CardActions>
                </Link>
            </Box>
        </Card>
    )
}

export default WhiskyCard;