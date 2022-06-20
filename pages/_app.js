import '../styles/globals.css'
import { Provider } from 'react-redux'
import Page from '../components/Layout/Page'
import { store } from '../redux/store'
import Default from '../components/layout/Default'

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
