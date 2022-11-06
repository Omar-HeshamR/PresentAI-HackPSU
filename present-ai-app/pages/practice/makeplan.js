import React from 'react'
import styled from 'styled-components'

const makeplan = () => {
  return (
    <MainBody>
      <MainContainer>
        <MainHeader>Choose Plan</MainHeader>
        <PlanContainer>
          <PlanBox><PlanTitle>NOVICE</PlanTitle>
              {/* <PlanItemContainer> */}
                <TopPlanItem>2 Challenges a Week</TopPlanItem>
                <BottomPlanItem>Emphasis on Pace and Efficency</BottomPlanItem>
              {/* </PlanItemContainer> */}
              <SelectButton>SELECT</SelectButton>
          </PlanBox>
          <PlanBox><PlanTitle>INTERMEDIATE</PlanTitle>
              {/* <PlanItemContainer> */}
              <TopPlanItem>5 Challenges a Week</TopPlanItem>
              <BottomPlanItem>Emphasis on Pace and Vocabulary</BottomPlanItem>
              {/* </PlanItemContainer> */}
              <SelectButton>SELECT</SelectButton>
          </PlanBox>
          <PlanBox><PlanTitle>ULTIMATE</PlanTitle>
              {/* <PlanItemContainer> */}
              <TopPlanItem>10 Challenges a Week</TopPlanItem>
              <BottomPlanItem>Emphasis on Pace, Vocab, Gestures, and Emotions</BottomPlanItem>
              {/* </PlanItemContainer> */}
              <SelectButton>SELECT</SelectButton>
          </PlanBox>
        </PlanContainer>
      </MainContainer>
    </MainBody>
  )
}


const MainBody = styled.div`
width: 100%;
height: 50vw;
background-color: #99ccff;
// background-color: coral;
justify-content: center;
align-items: center;
display: flex;
`
const MainContainer = styled.div`
width: 90%;
height: 90%;
justify-content: center;
align-items: center;
display: flex;
margin: auto auto;
// background-color: yellow;
flex-direction: column;
`
const MainHeader = styled.div`
font-size: 8vw;
font-weight: 900;
// background-color: red;
margin-bottom: auto;
color: #003366;
`
const PlanContainer = styled.div`
justify-content: center;
align-items: center;
display: flex;
width: 95%;
height: 80%;
margin: auto auto;
// background-color: cyan;
`
const PlanBox = styled.div`
display: flex;
width: 30%;
height: 95%;
margin: auto auto;
background-color: #ADD6FF;
border-radius: 4vw;
justify-content: center;
align-items: center;
flex-direction: column;
`
const PlanTitle = styled.div`
display: flex;
// background-color: yellow;
font-size: 3vw;
font-weight: 900;
margin-top: 5%;
margin-bottom: auto;
color: #003366;
`
const PlanItemContainer = styled.div`
width: 95%;
height: 80%;
margin: auto auto;
justify-content: center;
align-items: center;
// background-color: red;
flex-direction: column;
`

const TopPlanItem = styled.div`
margin-bottom: auto;
text-align: center;
// background-color: lightgreen;
font-size: 2vw;
font-weight: 700;
width: 95%;
color: #003366;
`
const BottomPlanItem = styled.div`
margin-bottom: auto;
text-align: center;
// background-color: lightgreen;
font-size: 2vw;
font-weight: 700;
width: 95%;
color: #003366;
`

const SelectButton = styled.button`
border: none;
font-size: 2vw;
font-weight: 900;
padding: 0.5vw 1vw;
background-color: #003366;
color: white;
border-radius: 0.75vw;
margin-bottom: 4%;
`

export default makeplan