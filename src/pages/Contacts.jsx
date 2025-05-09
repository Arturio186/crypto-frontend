import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Button,
  Paper,
  useTheme,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ContactInfo from '../components/Contacts/ContactInfo';
import SocialLinks from '../components/Contacts/SocialLinks';

const Contacts = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 1 }}
      >
        Вернуться
      </Button>

      <Paper elevation={0} sx={{ 
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        mb: 3
      }}>
        <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4
      }}>
        <Box sx={{ flex: 1 }}>
          <ContactInfo />
          <SocialLinks />
        </Box>
      </Box>
      </Paper>

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

export default Contacts;