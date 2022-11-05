import React from 'react'
import styled from 'styled-components'
import MaximizePotential from '../assets/MaximizePotential.png'
import CommunicateEffectively from '../assets/CommunicateEffectively.png'
import SpeakConfidently from '../assets/SpeakConfidently.png'
import Image from 'next/image';
import { keyframes } from 'styled-components';

const MainPageSection2 = () => {
  return (
    <MainBody>
      <MainHeading>Our goal is to make you...</MainHeading>
      <MainContainer>
        <MainGrid>
          <GridItem><GridText>Communicate Effectively</GridText></GridItem>
          <GridItem><GridIcon><Image src={SpeakConfidently} alt = "Speak Confidently" layout='intrinsic'/></GridIcon></GridItem>
          <GridItem><GridText>Maximize Potential</GridText></GridItem>
          <GridItem><GridIcon><Image src={CommunicateEffectively} alt = "Communicate Effectively" layout='intrinsic'/></GridIcon></GridItem>
          <GridItem><GridText>Speak Confidently</GridText></GridItem>
          <GridItem><GridIcon><Image src={MaximizePotential} alt = "Maximize Potential" layout='intrinsic'/></GridIcon></GridItem>
        </MainGrid>
      </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
display: flex;
width: 100%;
height: 60vw;
// background-color: lightgreen;
justify-content: center;
align-items: center;
flex-direction: column;
`
const MainContainer = styled.div`
justify-content: center;
align-items: center;
// background-color: yellow;
display: flex;
width: 90%;
height: 65%;
margin-bottom: auto;
`
const MainHeading = styled.div`
margin-top: auto;
font-size: 6vw;
display: flex;
font-weight: 700;
letter-spacing: 0.1vw;
color: #003366;
// background-color: aqua;

`

const MainGrid = styled.div`
// background-color: deeppink;
width: 90%;
height: 90%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 1vw;
grid-row-gap: 1vw;
`
const GridItem = styled.div`
display: flex;
justify-content: center;
align-content: center;
// background-color: purple;
text-align: center;
`

const GridText = styled.div`
width: 100%;
margin: auto auto;
display: flex; 
// background-color: lightgreen;
font-size: 4vw;
color: #003366;
`

const Pulse = keyframes`
0% {transform: scale(1);}
25% {transform: scale(1.05);}
50%{transform: scale(1.1);}
75% {transform: scale(1.05);}
100%{transform: scale(1);}
`

const GridIcon = styled.div`
margin: auto auto;
display: flex; 
width: 95%;
height: 95%;
// background-color: lightblue;
// color: black;
img{
  margin: auto auto;
  width: 60%;
  heigh: 60%;
  &:hover{
    animation-name: ${Pulse};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    
  }
}
`

export default MainPageSection2