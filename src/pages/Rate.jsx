import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Button, 
  Box, 
  Typography, 
  useTheme,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaidIcon from '@mui/icons-material/Paid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CircularProgress from '@mui/material/CircularProgress';
import {backendUrl} from '../consts';

const Rate = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    (async () => {
      try { 
        const response = await fetch(`${backendUrl}/getUsdtRate`);
  
        if (!response.ok) {
          throw new Error('Ошибка получения данных');
        }
  
        const data = await response.json();

        const utcDate = new Date(data.lastUpdated);
        const localDateString = utcDate.toLocaleString();
  
        setExchangeRate({
          buy: data.buy || 0,
          sell: data.sell || 0,
          change: data.change || 0,
          lastUpdated: localDateString
        });
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <Typography variant="error" sx={{ fontWeight: 'bold' }}>
      Произошла ошибка при получении информации о курсе валют
    </Typography>
  }

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
          <SwapHorizIcon color="primary" sx={{ fontSize: 40, verticalAlign: 'middle', mr: 1 }} />
          USDT/RUB
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ 
        p: 3,
        mb: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        background: theme.palette.background.paper
      }}>
        <Stack spacing={3}>
          {/* Основной курс */}
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="h6" color="text.secondary">
                Текущий курс
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                1 USDT = {exchangeRate.buy} ₽
              </Typography>
            </Box>
            
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              color: exchangeRate.change >= 0 ? 'success.main' : 'error.main'
            }}>
              <TrendingUpIcon sx={{ mr: 1 }} />
              <Typography variant="h6">
                {exchangeRate.change >= 0 ? '+' : ''}{exchangeRate.change}%
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Детали курса */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center'
          }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Покупка
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'medium' }}>
                {exchangeRate.buy} ₽
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="body2" color="text.secondary">
                Продажа
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'medium' }}>
                {exchangeRate.sell} ₽
              </Typography>
            </Box>
          </Box>

          {/* Время обновления */}
          <Typography variant="caption" color="text.secondary" display="block" textAlign="right">
            Обновлено: {exchangeRate.lastUpdated}
          </Typography>
        </Stack>
      </Paper>

      {/* Кнопка обмена */}
      <Button
        fullWidth
        variant="contained"
        size="large"
        startIcon={<PaidIcon />}
        sx={{
          py: 2,
          borderRadius: 2,
          fontSize: '1.1rem',
          mb: 3
        }}
      >
        Обменять USDT/RUB
      </Button>

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
  );
};

export default Rate;