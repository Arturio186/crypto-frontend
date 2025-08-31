import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Container, Button, Typography, useTheme} from '@mui/material';

const Template = ({content}) => {
  const navigate = useNavigate();
  const theme = useTheme();

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

      <Typography 
        variant="body2" 
        align="center" 
        sx={{ 
          mt: 3,
          color: theme.palette.text.secondary
        }}
      >
        © {new Date().getFullYear()} BashBTC
      </Typography>
    </Container>
  )
}

export default Template