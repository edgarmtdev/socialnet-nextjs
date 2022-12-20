import { Provider } from "react-redux";
import Default from "../components/layout/Default";
import Page from "../components/layout/Page";
import { store } from "../redux/store";
import "../styles/globals.css";
import GlobalStyles from "../theme/global/globals";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default;

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Page>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Page>
    </Provider>
  );
}

export default MyApp;
