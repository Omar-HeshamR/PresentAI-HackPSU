import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import InstagramIcon from '../assets/InstagramIcon.png'
import FacebookIcon from '../assets/FacebookIcon.png'
import YouTubeIcon from '../assets/YouTubeIcon.png'
import TwitterIcon from '../assets/TwitterIcon.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <MainBody>
      <MainContainer>
        <ThirdContainer>
          <SocialMediaGrid>
            <SocialMediaIcon><Image src={InstagramIcon}/></SocialMediaIcon>
            <SocialMediaIcon><Image src={FacebookIcon}/></SocialMediaIcon>
            <SocialMediaIcon><Image src={TwitterIcon}/></SocialMediaIcon>
            <SocialMediaIcon><Image src={YouTubeIcon}/></SocialMediaIcon>
          </SocialMediaGrid>
          <ButtonContainer><ContactUsButton>CONTACT US</ContactUsButton></ButtonContainer>
          <LogoContainer><Link href="/"><Logo>Present AI</Logo></Link></LogoContainer>
        </ThirdContainer>
        <EndingCaption>&copy; {new Date().getFullYear()} Present AI </EndingCaption>
      </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
display: flex;
width: 100%;
height: 16vw;
background-color: #003366;
justify-content: center;
align-items: center;
`
const MainContainer = styled.div`
display: flex;
margin-bottom: auto;
width: 95%;
height: 90%;
// background-color: purple;
justify-content: center;
align-items: center;
flex-direction: column;
`
const EndingCaption = styled.div`
display: flex;
font-size: 2vw;
color: white;
`

const ThirdContainer = styled.div`
display: flex;
width: 95%;
height: 80%;
// background-color: blue;
margin-top: auto;
flex-direction: row;
justify-content: center;
align-items: center;
`
const SocialMediaGrid = styled.div`
display: flex;
height: 90%;
width: 30%;
// background-color: yellow;
margin: auto auto;
justify-content: center;
align-items: center;
flex-direction: row;
`
const SocialMediaIcon = styled.div`
display: flex;
margin: auto auto;
cursor: pointer;
img{
  width: 5vw;
  height: 5vw;
  &:hover{
    transform: scale(1.1);
  }
}
`

const ButtonContainer = styled.div`
display: flex;
height: 90%;
width: 30%;
// background-color: violet;
margin: auto auto;
justify-content: center;
align-items: center;
`
const LogoContainer = styled.div`
display: flex;
height: 90%;
width: 30%;
// background-color: orange;
margin: auto auto;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
}
`
const Logo = styled.div`
margin: auto auto;
color: white;
font-family: "Archivo Black", sans-serif; 
font-size: 4vw;
cursor: pointer;
&:hover{
  transform: scale(1.05);
}
`
const ContactUsButton = styled.button`
margin: auto auto;
cursor: pointer;
// background-color: red;
background-color: white;
// border-radius: 0.75vw;
// border: 0.4vw solid white;
border: none;
border-radius: 0.75vw;
padding: 0.75vw 1.5vw;
color: #003366;
font-size: 3vw;
font-weight: 900;

&:hover{
  transform: scale(1.05);
}
`

export default Footer