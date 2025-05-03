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
  Divider,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';

const features = [
  {
    icon: <HelpOutlineIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Экспертные консультации",
    description: "Любой вопрос по криптовалютам - наши специалисты дадут развернутый ответ"
  },
  {
    icon: <StarIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Лидер рынка",
    description: "Лучший сервис в городе"
  },
  {
    icon: <VerifiedUserIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Надежность",
    description: "Безупречная репутация с 2019 года"
  },
  {
    icon: <BusinessIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Удобство",
    description: "Современный и комфортный офис в центре города"
  }
];

const About = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
          «BashBTC» развивается в сфере криптовалют с 2019 года. 
          Мы готовы проконсультировать вас по любым направлениям, связанным с криптовалютами. 
          Офис расположен в Зеленой Роще, с удобной инфраструктурой. 
          За время работы мы заслужили доверие, как профессионалы своего дела. 
          Наши консультации подойдут руководителям, предпринимателям, майнерам, трейдерам и инвесторам.
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
          Компания BashBTC никогда не просит отправить криптовалюту или деньги заранее.<br />
          Все консультации проходят в офисе. Для консультации, необходимо предварительно связаться с нами.<br />
          Остерегайтесь мошенников!<br />
        </Typography>
      </Paper>

      {/* Дополнительная информация */}
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

export default About;