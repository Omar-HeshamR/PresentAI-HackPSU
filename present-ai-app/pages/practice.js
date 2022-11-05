import React from 'react'
import styled from 'styled-components'
import "@fontsource/outfit" 
import Link from 'next/link'

const practice = () => {
  return (
    <Section>
      <Title>Choose A Practice Style</Title>
      <MainContainer>
        <MiniContainer>
          <Link href="./practice/IntreviewPrep"><ButtonChoice>Intreveiw Preparation</ButtonChoice></Link>
          <Link href="./practice/MainPractice"><ButtonChoice>Practice My Topic</ButtonChoice></Link>
        </MiniContainer>  
        <MiniContainer>
          <Link href="./practice/ImpromptuPractice"><ButtonChoice>Impromptu Practice</ButtonChoice></Link>
          <Link href="./practice/makeplan"><ButtonChoice>Create Practice Plan</ButtonChoice></Link>
        </MiniContainer>
      </MainContainer>
    </Section>
  )
}

const Section = styled.section`
  font-family: "Outfit", sans-serif; 
  color: #003366;
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 30vw;
  flex-direction: column;
  background-color: #99ccff;
  a{
    text-decoration: none;
    color: #003366;
  
    &[aria-current] {
      color: #003366;
    }
  }
`
const Title = styled.div`
  margin-top: 1vw;
  margin-bottom: 1vw;
  font-size: 4vw;
  font-weight: 900;
`
const MainContainer = styled.div`
  width: 80%;
  height: 20vw;
  // background-color: green;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MiniContainer = styled.div`
margin-left: 1vw;
margin-right: 1vw;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
// background-color: red;
width: 90%;
height: 100%;
`

const ButtonChoice = styled.button`
outline: none;
margin-left: 0.25vw;
margin-right: 0.25vw;
margin-top: 1.25vw;
margin-bottom: 1.25vw;
width: 40vw;
border: 0.25vw double white;
border-radius: 0.75vw;
color: white;
font-weight: 800;
font-size: 2vw;
padding: 1vw 3vw;
cursor: pointer;
transition: all 0.1s ease;
background-color: #003366;

&:hover{
  transform: scale(1.05);
  background-color: white;
  color: #003366;  
}
`

export default practice