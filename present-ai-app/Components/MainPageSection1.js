import React from 'react'
import styled from 'styled-components'

const MainPageSection1 = () => {
  return (
    <MainBody>
      <MainContainer>
        <MainHeaderContainer>
            <MainHeader>Perfect Presenting</MainHeader>
        </MainHeaderContainer>
        <SubHeaderContainer>
            <SubHeader>Ace all your intreviews and assigments with our AI-powered, research-based instant feedback!</SubHeader>
        </SubHeaderContainer>
        <GetStartedButton>GET STARTED</GetStartedButton>
      </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
width: 100%;
height: 40vw;
// background-color: lightgreen;
background-color: #99ccff;
display: flex;
justify-content: center;
align-items: center;
`
const MainContainer = styled.div`
justify-content: center;
// background-color: yellow;
display: flex;
width: 90%;
height: 80%;
flex-direction: column;
`

const MainHeaderContainer = styled.div`
margin: 0 auto;
display: flex;
height: 30%;
width: 90%;
text-align: center;
align-items: center;
justify-content: center;
// background-color: red;
`
const MainHeader = styled.div`
// background-color: blue;
margin-top: auto;
display: flex;
font-weight: 900;
font-size: 8vw;
color: #003366;
letter-spacing: 0.1vw;
`
const SubHeaderContainer = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 2%;
display: flex;
height: auto;
width: 80%;
text-align: center;
align-items: center;
justify-content: center;
// background-color: green;
margin-bottom: 1.5vw;
`
const SubHeader = styled.div`
// background-color: deeppink;
margin-bottom: 0vw;
display: flex;
// font-weight: 700;
font-size: 3.5vw;
color: #003366;
letter-spacing: 0.1vw;
`

const GetStartedButton = styled.button`
margin-left: auto;
margin-right: auto;
// background-color: red;
background-color: #003366;
// border-radius: 0.75vw;
// border: 0.4vw solid white;
border: none;
padding: 0.65vw 1.4vw;
color: white;
font-size: 2.75vw;
font-weight: 900;

&:hover{
  background-color: white;
  color: #003366;
}
`

export default MainPageSection1