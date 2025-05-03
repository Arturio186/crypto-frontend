import {useEffect, useState} from 'react';
import {init, miniApp} from '@telegram-apps/sdk';
import CircularProgress from '@mui/material/CircularProgress';

import AppRouter from './routes/AppRouter';

const initStateMapping = {
  error: 'error',
  successful: 'successful',
  loading: 'loading'
};

const initializeTelegramSDK = async(setInitState) => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      setInitState(initStateMapping.successful);
    }

  } catch (error) {
    setInitState(initStateMapping.error);
    console.error('Ошибка инициализации:', error);
  }
};

const App = () => {
  const [initState, setInitState] = useState(initStateMapping.loading);

  useEffect(() => {
    initializeTelegramSDK(setInitState);
  }, [])

  if (initState === initStateMapping.loading) {
    return <CircularProgress />
  }
  /*
  if (initState === initStateMapping.error) {
    return <p>Ошибка при инициализации miniApp</p>
  } */

  return <AppRouter />
}

export default App;
