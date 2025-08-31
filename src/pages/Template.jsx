import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Container, Button} from '@mui/material';

const Template = ({content}) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {/* Кнопка назад */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 1 }}
      >
        Вернуться
      </Button>

      {content}
    </Container>
  )
}

export default Template