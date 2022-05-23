import '../styles/Global/globals.css'
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  store.subscribe(() => console.log(store.getState()));
  return <Provider store={ store }><Component {...pageProps} /></Provider>
}

export default MyApp
