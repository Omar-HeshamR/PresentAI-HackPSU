import React from 'react'
import styled from 'styled-components'

const MainPageSection2 = () => {
  return (
    <MainBody>
      <MainHeading>Our goal is to make you...</MainHeading>
      <MainContainer>
        <MainGrid>
          <GridText>TEXT</GridText>
          <GridIcon>ICON</GridIcon>
          <GridText>TEXT</GridText>
          <GridIcon>ICON</GridIcon>
          <GridText>TEXT</GridText>
          <GridIcon>ICON</GridIcon>
        </MainGrid>
      </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
display: flex;
width: 100%;
height: 50vw;
background-color: lightgreen;
justify-content: center;
align-items: center;
flex-direction: column;
`
const MainContainer = styled.div`
justify-content: center;
align-items: center;
background-color: yellow;
display: flex;
width: 90%;
height: 90%;
`
const MainHeading = styled.div`
font-size: 6vw;
display: flex;
font-weight: 700;
letter-spacing: 0.1vw;
color: black;
background-color: aqua;

`

const MainGrid = styled.div`
background-color: deeppink;
width: 90%;
height: 90%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 1vw;
grid-row-gap: 1vw;
`
const GridText = styled.div`
margin: auto auto;
display: flex; 
width: 100%;
height: 100%;
background-color: lightgreen;
font-size: 5vw;
color: black;
`
const GridIcon = styled.div`
margin: auto auto;
display: flex; 
width: 100%;
height: 100%;
background-color: lightblue;
font-size: 5vw;
color: black;
`

export default MainPageSection2