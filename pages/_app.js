import '../styles/globals.css'
import Page from '../src/page/Page'



function MyApp({ Component, pageProps }) {
  return <>
    <Page component={<Component {...pageProps} />} />
  </>


}

export default MyApp
