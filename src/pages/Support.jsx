import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {openTelegramLink} from '@telegram-apps/sdk';
import { 
  Box,  
  Typography, 
  Button,
  Paper,
  Stack,
  Grid
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CircularProgress from '@mui/material/CircularProgress';

import {backendUrl} from '../consts';
import Template from './Template';

const Support = () => {
  const [operator, setOperator] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try { 
        const response = await axios.get(`${backendUrl}/applications/randomOperator`);

        if (response.status !== 200) {
          throw new Error('Ошибка получения данных');
        }

        const {operator} = response.data;

        setOperator(operator);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleStartDialog = async() => {
    openTelegramLink(`https://t.me/${operator}`);
  };

  if (isLoading) {
    return <Template content={
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
  }

  if (isError) {
    return <Template content={
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography>
          Ошибка при получении данных об операторах
        </Typography>
      </Grid>
    } />
  }

  return (
    <Template content={
      <>
        <Paper elevation={0} sx={{ 
          p: 3, 
          mb: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2
        }}>
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="h2">
                Мы всегда готовы помочь!
              </Typography>
            </Box>
            
            <Typography>
              Если у вас возникли вопросы или у вас есть 
              предложения по улучшению сервиса - напишите нам, и мы оперативно поможем!
            </Typography>

            <Typography sx={{ fontWeight: 'medium' }}>
              Вы можете связаться с нами через чат.
            </Typography>
          </Stack>
        </Paper>

        {/* Кнопка действия */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<SupportAgentIcon />}
            onClick={handleStartDialog}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem'
            }}
          >
            Начать диалог
          </Button>
        </Box>
      </>
    } />
  );
};

export default Support;