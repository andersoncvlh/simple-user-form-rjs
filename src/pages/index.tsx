import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import reportWebVitals from '../reportWebVitals';
import Quotation from './quotation/quotation';

const Home: React.FC<AppProps> = () => {
  reportWebVitals();
  return (
    <Quotation />
  );
}

export default Home;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals