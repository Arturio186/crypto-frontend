import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Box, Typography, TextField, MenuItem, Button, RadioGroup, FormControlLabel, Radio, Grid} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import Template from './Template';
import {backendUrl} from '../consts';

const getBuyPercentage = (amount) => {
  const sum = parseFloat(amount) || 0;
  
  if (sum < 100) return 3;
  if (sum < 200) return 2;
  if (sum < 500) return 1.5;
  if (sum < 1000000) return 1.3;
  return 1.2;
};

const getSellPercentage = (amount) => {
  const sum = parseFloat(amount) || 0;
  
  if (sum < 50) return { type: 'fixed', value: 1500 };
  if (sum < 100) return { type: 'percentage', value: 3 };
  if (sum < 150) return { type: 'percentage', value: 2 };
  if (sum < 200) return { type: 'percentage', value: 1.5 };
  if (sum < 500) return { type: 'percentage', value: 1.2 };
  return { type: 'percentage', value: 1 };
};

const Exchange = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [hours, setHours] = useState([]);
  const [toGet, setToGet] = useState('');
  const [rate, setRate] = useState();

  const [formData, setFormData] = useState({
    time: '',
    network: '',
    amount: '',
    type: '1',
    address: '',
    date: '',
  });

  useEffect(() => {
    (async () => {
      try { 
        const response = await axios.get(`${backendUrl}/applications/getRate`);

        if (response.status !== 200) {
          throw new Error('Ошибка получения данных');
        }

        const usdtRate = response.data;

        setRate(Number((1 / usdtRate.baseUsdRate).toFixed(2)));
      } catch (err) {
        alert(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!formData.date) {
      setHours([]);
      return;
    }

    (async () => {
      try { 
        const response = await axios.get(`${backendUrl}/applications/availableHours/${formData.date}`);

        if (response.status !== 200) {
          throw new Error('Ошибка получения данных о свободных слотах');
        }

        setHours(response.data);
      } catch (err) {
        alert(err.message)
      }
    })();
  }, [formData.date]);

  useEffect(() => {
    const amount = parseFloat(formData.amount) || 0;
    
    if (amount <= 0) {
      setToGet('');
      return;
    }

    if (formData.type === '1') {
      const percentage = getBuyPercentage(amount);
      const totalUsd = amount / parseFloat(rate) || 0;

      const commission = totalUsd * (percentage / 100);
      const finalAmount = totalUsd - commission;

      setToGet(`${finalAmount.toFixed(2)} USDT`);
    } else {
      const commissionInfo = getSellPercentage(amount);
      const totalRub = amount * parseFloat(rate);
      
      const commission = commissionInfo.type === 'fixed' ?
        commissionInfo.value :
        totalRub * (commissionInfo.value / 100)
      
      const finalAmount = totalRub - commission;

      if (finalAmount <= 0) {
        setToGet('0 RUB')
      } else {
        setToGet(`${finalAmount.toFixed(2)} RUB`);
      }
    }
  }, [formData.amount, formData.type]);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
  
    if (!formData.date) errors.date = 'Дата обязательна';
    if (!formData.time) errors.time = 'Время обязательно';
    if (!formData.network) errors.network = 'Сеть обязательна';
    if (!formData.amount || parseFloat(formData.amount) <= 0) errors.amount = 'Введите корректную сумму';
    if (!formData.address.trim()) errors.address = 'Адрес обязателен';
    
    if (Object.keys(errors).length > 0) {
      console.error('Ошибки валидации:', errors);
      
      alert(`Заполните все поля:\n${Object.values(errors).map(n => `- ${n}`).join('\n')}`)

      setErrors(errors);
      return;
    }

    const application = {
      time: formData.time,
      network: formData.network,
      amount: parseFloat(formData.amount),
      type: parseInt(formData.type),
      address: formData.address,
      date: formData.date,
      tg_username: 'crazysiberian86'
    };

    (async() => {
      try {
        await axios.post(`${backendUrl}/applications/add`, application);

        alert('Запись создана')
      } catch (error) {
        const errorMsg = error?.response?.data?.error;
        
        if (errorMsg) {
          alert(`Ошибка при попытке записаться:\n${errorMsg}`)
        } else {
          alert(`Ошибка при попытке записаться`)
        }
      }
    })();
  };

  if (isLoading) {
    return (
      <Template content={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <CircularProgress />
        </Grid>
      } /> 
    )
  }

  return (
    <Template
      content={
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
            Обмен USDT/RUB
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Дата"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={handleChange('date')}
            />

            <TextField
              select
              label="Время"
              fullWidth
              margin="normal"
              value={formData.time}
              onChange={handleChange('time')}
            >
              {!hours.length && <MenuItem disabled value="no">Выберите дату</MenuItem>}
              {hours.map((hour) => <MenuItem key={hour} value={hour}>{hour}</MenuItem>)}
            </TextField>

            <TextField
              select
              label="Сеть"
              fullWidth
              margin="normal"
              value={formData.network}
              onChange={handleChange('network')}
            >
              <MenuItem value="TRC20">TRC20</MenuItem>
              <MenuItem value="BEP20">BEP20</MenuItem>
              <MenuItem value="TON">TON</MenuItem>
            </TextField>

            <TextField
              label="Сумма"
              type="number"
              fullWidth
              margin="normal"
              value={formData.amount}
              onChange={handleChange('amount')}
            />

            <TextField
              label="Адрес"
              fullWidth
              margin="normal"
              value={formData.address}
              onChange={handleChange('address')}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1, mt: 2 }}>
              <RadioGroup row value={formData.type} onChange={handleChange('type')}>
                <FormControlLabel value="1" control={<Radio />} label="Купить" />
                <FormControlLabel value="2" control={<Radio />} label="Продать" />
              </RadioGroup>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
            >
              Отправить
            </Button>

            {toGet && 
              <Typography sx={{ mt: 2, textAlign: 'center' }}>
                К получению: {toGet}
              </Typography>
            }
          </form>
        </Box>
      }
    />
  );
};

export default Exchange;
