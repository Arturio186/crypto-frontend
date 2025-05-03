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
        <Link href="tel:+79373090632" underline="hover">
          +7 (937) 309-06-32
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <PhoneIcon color="primary" sx={{ mr: 2 }} />
        <Link href="tel:+79093477744" underline="hover">
          +7 (909) 347-77-44
        </Link>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationIcon color="primary" sx={{ mr: 2 }} />
        <Typography>г. Уфа, ул. Бакалинская, 33/2, этаж 2, офис 5</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ScheduleIcon color="primary" sx={{ mr: 2 }} />
        <Typography>Пн-Пт: 12:00 - 19:00<br />Сб-Вс: 12:00 - 17:00</Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
    </Box>
  );
};

export default ContactInfo;