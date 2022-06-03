import '../styles/globals.css';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import customTheme from '../styles/theme/index';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
