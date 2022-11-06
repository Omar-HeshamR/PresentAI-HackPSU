import React from 'react'
import styled from 'styled-components'
import "@fontsource/archivo-black"
import Link from 'next/link'
import { keyframes } from 'styled-components';

const Navbar = () => {
  return (
    <MainBody>
      <MainContainer>
          <LogoBox>
          <Link href ="/">
          <Logo>Present AI</Logo>
          </Link>
          </LogoBox>

        <MenuBox>
          <NavOption><Link href ="/practice">Practice</Link></NavOption>
          <NavOption><Link href ="/about">About</Link></NavOption>
          <LogInButton>LOG IN</LogInButton>
        </MenuBox>
      </MainContainer>
    </MainBody>
  )
}

export default Navbar


const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const MainBody = styled.div`
a{
  text-decoration: none;
  color: #003366;

  &[aria-current] {
    color: #003366;
  }
}
display: flex;
width: 100%;
height: 8vw;
// background-color: #99ccff;
// background-color: #ADD6FF;
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation-name: ${gradient};
animation-duration: 8s;
animation-iteration-count: infinite;
justify-content: center;
align-items: center;
`

const MainContainer = styled.div`
display: flex;
width: 95%;
height: 90%;
// background-color: deeppink;
`
const LogoBox = styled.div`
margin: auto 0;
display: flex;
width: 30%;
height: 90%;
// background-color: green;
`

const Logo = styled.div`
margin-right: auto;
margin-top: auto;
margin-bottom: auto;
// color: white;
color: #003366;
font-family: "Archivo Black", sans-serif; 
font-size: 4vw;
transition: all 0.5s ease;

&:hover{
  transform: scale(1.05);
}
`

const MenuBox = styled.div`
margin-left: auto;
margin-top: auto;
margin-bottom: auto;
display: flex;
width: 40%;
height: 90%;
// background-color: yellow;
`

const NavOption = styled.div`
margin: auto auto;
font-weight: 700;
// color: white;
font-size: 2.5vw;
// background-color: blue;
color: #003366;
cursor: pointer;

&:hover{
  text-decoration: underline;
}
`
const LogInButton = styled.button`
margin-left: auto;
margin-top: auto;
margin-bottom: auto;
// background-color: red;
background-color: #003366;
border-radius: 0.75vw;
border: 0.4vw solid white;
padding: 0.75vw 1.5vw;
color: white;
font-size: 2vw;
font-weight: 900;
// height: 5vw;
// width: 10vw;
cursor: pointer;
z-index:10;

&:hover{
  background-color: white;
  border: 0.4vw solid #003366;
  color: #003366;
}
`