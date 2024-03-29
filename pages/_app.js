import { Provider } from "react-redux";
import Default from "../components/layout/Default";
import Page from "../components/layout/page";
import DropdownProvider from "../context/dropdown/Provider";
import { store } from "../redux/store";
import "../styles/globals.css";
import GlobalStyles from "../theme/global/globals";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default;

  return (
    <Provider store={store}>
      <GlobalStyles />
      <DropdownProvider>
        <Page>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Page>
      </DropdownProvider>
    </Provider>
  );
}

export default MyApp;
