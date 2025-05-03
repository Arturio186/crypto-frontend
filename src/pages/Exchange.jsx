import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Container, Button, Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Exchange = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 1 }}
      >
        Вернуться
      </Button>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Обмен
        </Typography>
      </Box>
    
  </Container>
  )
}

export default Exchange