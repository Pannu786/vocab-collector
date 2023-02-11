import { Typography, Box, Container } from '@mui/material';
import Main from './components/Main';

const App = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundImage: `url('https://wallpaperset.com/w/full/6/7/6/211879.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Container sx={{ textAlign: 'center', mb:'auto' }}>
        <Typography variant='h5' color='white'>
          Vacab Collector{' '}
        </Typography>
        <Main />
      </Container>
      
    </Box>
  );
};

export default App;
