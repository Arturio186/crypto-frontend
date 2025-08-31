import React from 'react';
import {Box, Paper} from '@mui/material';

import ContactInfo from '../components/Contacts/ContactInfo';
import SocialLinks from '../components/Contacts/SocialLinks';
import Template from './Template';

const Contacts = () => {
  return (
    <Template 
      content={
        <>
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
        </>
      }
    />
  );
};

export default Contacts;