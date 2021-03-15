import '../styles/global.css';
import React from 'react';

interface AppPropsType {
  Component: any;
  pageProps: any;
}
const MyApp: React.FC<AppPropsType> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
