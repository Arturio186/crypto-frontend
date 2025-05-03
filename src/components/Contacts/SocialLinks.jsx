import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';

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
          href="https://wa.me/78001234567" 
          target="_blank"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          color="primary" 
          href="https://vk.com/cryptoapp" 
          target="_blank"
          aria-label="VK"
        >
          <PublicIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          color="primary" 
          href="https://twitter.com/cryptoapp" 
          target="_blank"
          aria-label="Twitter"
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialLinks;