import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Avatar,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Безопасность",
      description: "Используем банковский уровень шифрования и двухфакторную аутентификацию"
    },
    {
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Скорость",
      description: "Среднее время обработки транзакции — менее 2 минут"
    },
    {
      icon: <CurrencyExchangeIcon color="primary" sx={{ fontSize: 40 }} />,
      title: "Доступность",
      description: "Работаем с 20+ криптовалютами и фиатом"
    }
  ];

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

      {/* Заголовок */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Avatar sx={{ 
          bgcolor: 'primary.main', 
          width: 60, 
          height: 60,
          mx: 'auto',
          mb: 2
        }}>
          <GroupsIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          О нашей платформе
        </Typography>
      </Box>

      {/* Основной контент */}
      <Paper elevation={0} sx={{ 
        p: 3,
        mb: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2
      }}>
        <Typography paragraph sx={{ mb: 3 }}>
          Мы — современная криптовалютная платформа, основанная в 2020 году. 
          Наша миссия — сделать работу с цифровыми активами простой, безопасной 
          и доступной для каждого.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h2" sx={{ 
          fontWeight: 'medium',
          mb: 2,
          textAlign: 'center'
        }}>
          Почему выбирают нас
        </Typography>

        <Stack spacing={3} sx={{ mt: 3 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ flexShrink: 0 }}>
                {feature.icon}
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography paragraph sx={{ fontStyle: 'italic', textAlign: 'center' }}>
          "Более 500,000 пользователей по всему миру уже доверяют нам свои активы"
        </Typography>
      </Paper>

      {/* Дополнительная информация */}
      <Typography variant="body2" color="text.secondary" textAlign="center">
        © {new Date().getFullYear()} CryptoApp. Все права защищены.
      </Typography>
    </Container>
  );
};

export default About;