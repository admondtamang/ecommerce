import '../styles/globals.css';
import '../styles/style.css';
import '../styles/style.scss';

import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
const theme = {
  colors: {
    primary: '#fafafa',
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
export default MyApp;
