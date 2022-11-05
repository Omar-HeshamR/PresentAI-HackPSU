import {StateContext} from "../Components/StateContext"
import GlobalStyles from "../styles/GlobalStyles"
import Layout from "../Components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
