import '../styles/globals.css'
import {DataProvider} from '../store/globalState'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
     <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
