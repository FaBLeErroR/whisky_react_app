import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#5d8aa8',
        color: 'white',
        textAlign: 'center',
        padding: 3,
        marginTop: 5,
      }}
    >
      <Typography variant="h6">Японский виски</Typography>
      <Typography variant="body1">Этот сайт содержит информацию и отзывы о попудярных сортах японского виски</Typography>
    </Box>
  );
}

export default Footer;
