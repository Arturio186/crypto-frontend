import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

const ContactInfo = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
        Наши контакты
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <PhoneIcon color="primary" sx={{ mr: 2 }} />
        <Link href="tel:+78001234567" underline="hover">
          +7 (800) 123-45-67
        </Link>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <EmailIcon color="primary" sx={{ mr: 2 }} />
        <Link href="mailto:info@cryptoapp.com" underline="hover">
          info@cryptoapp.com
        </Link>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationIcon color="primary" sx={{ mr: 2 }} />
        <Typography>г. Москва, ул. Криптовалютная, 24</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ScheduleIcon color="primary" sx={{ mr: 2 }} />
        <Typography>Пн-Пт: 9:00 - 18:00</Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
    </Box>
  );
};

export default ContactInfo;