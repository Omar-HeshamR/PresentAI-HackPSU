import {StateContext} from "../Components/StateContext"
import { createGlobalStyle } from 'styled-components'
import Layout from "../Components/Layout"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <GlobalStyle />
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
