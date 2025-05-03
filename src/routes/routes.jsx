import {Navigate} from "react-router-dom";
import {paths} from './paths';
import Main from '../pages/Main';
import About from '../pages/About';
import Exchange from '../pages/Exchange';
import Support from '../pages/Support';
import Contacts from '../pages/Contacts';
import Rate from '../pages/Rate';

export const routes = [
  {path: paths.MAIN, element: <Main />, title: "Главная страница"},
  {path: paths.ABOUT, element: <About />, title: "О нас"},
  {path: paths.EXCHANGE, element: <Exchange />, title: "Купить/продать USDT"},
  {path: paths.SUPPORT, element: <Support />, title: "Поддержка"},
  {path: paths.CONTACTS, element: <Contacts />, title: "Контакты"},
  {path: paths.RATE, element: <Rate />, title: "Курс"},
  {path: "/*", element: <Navigate to={paths.MAIN} />, title: "Переадресация"}
]