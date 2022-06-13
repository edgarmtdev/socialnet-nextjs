import '../styles/globals.css'
import { Provider } from 'react-redux'
import Page from '../components/Layout/Page'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
                <Page>
                    <Component {...pageProps} />
                </Page>
        </Provider>
    )
}

export default MyApp
