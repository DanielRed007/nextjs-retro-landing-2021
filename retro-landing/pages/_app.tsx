import Layout from './client/components/layout/Layout';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
