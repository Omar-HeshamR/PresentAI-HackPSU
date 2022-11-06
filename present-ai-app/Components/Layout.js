import React from 'react'
import GlobalStyles from "../styles/GlobalStyles";
import styled from 'styled-components';
import Navbar from './Navbar';
import favIcon from "../public/favicon.ico"
import Footer from "./Footer";
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
        <Head>
          <title>Present AI</title>
          <link rel="icon"  type="image/x-icon" href= {favIcon} />
        </Head>

      <FontSet>
        <Navbar/>
          {children}
        <Footer />
      </FontSet>

    </>

  )
}

const FontSet = styled.div`
font-family: "Outfit", sans-serif;
`

export default Layout