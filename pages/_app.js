import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/main.sass';
import withData from '../lib/withData';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  apollo: PropTypes.object,
};
