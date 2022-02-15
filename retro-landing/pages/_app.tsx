import Layout from './client/components/layout/Layout';
import { HorusGamesProvider } from "./shared/context/HorusGamesProvider";
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <HorusGamesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HorusGamesProvider>
  )
}
