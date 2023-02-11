import '../styles/globals.css'
import Fonts from "../components/fonts"
import { store } from '../store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Fonts />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
