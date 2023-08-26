import Layout from '@/layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '@/reduc/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={ store }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
