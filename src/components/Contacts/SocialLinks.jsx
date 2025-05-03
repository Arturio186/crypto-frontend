import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

const SocialLinks = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
        Мы в соцсетях
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton 
          color="primary" 
          href="https://t.me/cryptoapp" 
          target="_blank"
          aria-label="Telegram"
        >
          <TelegramIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          color="primary" 
          href="https://wa.me/79373090632" 
          target="_blank"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
        <IconButton 
          color="primary" 
          href="https://wa.me/79093477744" 
          target="_blank"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialLinks;