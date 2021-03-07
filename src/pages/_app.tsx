import '../styles/global.css';
import React from 'react';

const MyApp: React.FC = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
