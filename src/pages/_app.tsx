import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/global.style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
