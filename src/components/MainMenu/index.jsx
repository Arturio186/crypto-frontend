import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme
} from '@mui/material';
import {
  Info as AboutIcon,
  CompareArrows as ExchangeIcon,
  CurrencyExchange as RateIcon,
  Support as SupportIcon,
  Contacts as ContactsIcon
} from '@mui/icons-material';

import { paths } from '../../routes/paths';


const menuItems = [
  {text: 'О нас', icon: <AboutIcon />, path: paths.ABOUT},
  {text: 'Купить/продать USDT', icon: <ExchangeIcon />, path: paths.EXCHANGE},
  {text: 'Курс', icon: <RateIcon />, path: paths.RATE},
  {text: 'Поддержка', icon: <SupportIcon />, path: paths.SUPPORT},
  {text: 'Контакты', icon: <ContactsIcon />, path: paths.CONTACTS}
];

const MainMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth="sm" 
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        py: 4,
        backgroundColor: theme.palette.background.default
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        sx={{ 
          mb: 4,
          fontWeight: 'bold',
          color: theme.palette.text.primary
        }}
      >
        BashBTC
      </Typography>

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        flexGrow: 1
      }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={item.icon}
              sx={{
                py: 2,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                justifyContent: 'flex-start',
                pl: 3,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                  backgroundColor: theme.palette.primary.dark
                }
              }}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
            
            {index < menuItems.length - 1 && (
              <Divider sx={{ my: 1, opacity: 0.5 }} />
            )}
          </React.Fragment>
        ))}
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

export default MainMenu;