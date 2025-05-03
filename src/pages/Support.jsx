import React from 'react';
import { useNavigate } from 'react-router-dom';
import { miniApp, openTelegramLink } from '@telegram-apps/sdk';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  Paper,
  Stack,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const supportUser = 'crazysiberian86'

const Support = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleStartDialog = async() => {
    openTelegramLink(`https://t.me/${supportUser}`);
  };

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {/* Кнопка назад */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 1 }}
      >
        Вернуться
      </Button>

      {/* Контент */}
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
          
          <Typography paragraph>
            Если у вас возникли вопросы или у вас есть 
            предложения по улучшению сервиса - напишите нам, и мы оперативно поможем!
          </Typography>

          <Typography paragraph sx={{ fontWeight: 'medium' }}>
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

export default Support;