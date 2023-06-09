import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <title>Gerência Financeira</title>
  </Head>;
  return <Component {...pageProps} />;
}
