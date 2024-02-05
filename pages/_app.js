import '../styles/globals.css'
import Fonts from "../components/fonts"
import { store } from '../store'
import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Provider store={store}>
        <Fonts />
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  )
}

export default MyApp
