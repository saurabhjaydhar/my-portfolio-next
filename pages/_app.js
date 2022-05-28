import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '../styles/theme/index';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
