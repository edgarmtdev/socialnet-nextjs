import { Provider } from 'react-redux'
import Default from '../components/layout/Default'
import Page from '../components/layout/Page'
import Spinner from '../components/utils/Spinner'
import { store } from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || Default

    return (
        <Provider store={store}>
            <Page>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Page>
        </Provider>
    )
}

export default MyApp
