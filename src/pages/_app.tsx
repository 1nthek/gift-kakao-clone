import React from 'react';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Global } from '@emotion/react';
import { GlobalStyle } from 'styles/global.style';
import DefaultLayout from 'layouts';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const Layout = (Component as any).Layout || DefaultLayout;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout pageProps={pageProps}>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
