import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button, Box, Typography, Paper, Stack, Grid, useTheme} from '@mui/material';
import {TrendingUp, Paid, SwapHoriz} from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

import {backendUrl} from '../consts';
import {paths} from '../routes/paths';

import Template from './Template';

const Rate = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    (async () => {
      try { 
        const response = await axios.get(`${backendUrl}/applications/getRate`);

        if (response.status !== 200) {
          throw new Error('Ошибка получения данных');
        }

        const usdtRate = response.data;

        const baseCost = (1 / usdtRate.baseUsdRate).toFixed(2);
  
        setExchangeRate({
          base: baseCost || 0,
          change: usdtRate.change || 0
        });
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <Template content={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <CircularProgress />
        </Grid>
      } /> 
    )
  }

  if (isError) {
    return (
      <Template content={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography>
            Ошибка при получении информации о курсе валют
          </Typography>
        </Grid>
      } />
    )
  }

  return (
    <Template
      content={
        <>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              <SwapHoriz color="primary" sx={{ fontSize: 40, verticalAlign: 'middle', mr: 1 }} />
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
                    1 USDT = {exchangeRate.base} ₽
                  </Typography>
                </Box>
                
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: exchangeRate.change >= 0 ? 'success.main' : 'error.main'
                }}>
                  <TrendingUp sx={{ mr: 1 }} />
                  <Typography variant="h6">
                    {exchangeRate.change >= 0 ? '+' : ''}{exchangeRate.change}%
                  </Typography>
                </Box>
              </Box>

              {/* <Divider /> */}

              {/* Детали курса */}
              {/* <Box sx={{
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
              </Box> */}
            </Stack>
          </Paper>

          {/* Кнопка обмена */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<Paid />}
            sx={{
              py: 2,
              borderRadius: 2,
              fontSize: '1.1rem',
              mb: 3
            }}
            onClick={() => navigate(paths.EXCHANGE)}
          >
            Обменять USDT/RUB
          </Button>
        </>
      }
    />
  );
};

export default Rate;