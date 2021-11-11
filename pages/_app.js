import Page from '../components/Page';
import './../components/styles/main.sass';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
