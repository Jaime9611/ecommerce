import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color='primary' aria-label='Loading' data-testid='loading' />
    </Box>
  );
};

export default Loading;
