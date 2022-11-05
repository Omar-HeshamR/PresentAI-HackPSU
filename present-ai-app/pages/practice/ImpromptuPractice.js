import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import "@fontsource/outfit" 
import {SlBubbles} from "react-icons/sl"
import Webcam from "react-webcam";

const ImpromptuPractice = () => {

  const webcamRef = useRef(null);
  const ImpromptuArray = ["My biggest concern for the future is","Real wealth is never measured in money or possessions",
  "If I were an animal Id be a", "If I ruled the world, I would","In what situation is lying a good idea","Goals are good for you",
  "Discribe your life if you were a giraffe","Talk about a time you were embarassed publicly",
  "What is a memory you will never forget and why","You got 5 million dollars, whats the move",
  "You get 2 minutes with your favorite celebrity"]
  const [Impropmtu, setImpromptu] = useState("My biggest concern for the future is");

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

  function handleGenerate(){
    const result = getRandomItem(ImpromptuArray)
    setImpromptu(result)
  }

  return (
    <Section>
    <FatherDiv>
      <ImpromptuPracticeContainer>
        <CenteredDiv><ChatIcon /></CenteredDiv>
        <SpecialDiv><Header>Your Impromptu Challange: </Header>
        <RandomChallange>For two minutes talk about the following topic: <RedColor>&quot;{Impropmtu}&quot;</RedColor></RandomChallange>
        </SpecialDiv>
        <CenteredDiv><GenerateButton onClick={handleGenerate}>Generate Impromptu</GenerateButton></CenteredDiv>
      </ImpromptuPracticeContainer>
    </FatherDiv>
    <CameraDiv>
    <Webcam
          ref={webcamRef}
          mirrored={true}
          height={480}
          >
        </Webcam>
    </CameraDiv>
    </Section>
  )
}

const Section = styled.section`
  font-family: "Outfit", sans-serif; 
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 50vw;
  flex-direction: column;
  background-color: #99ccff;
`
const CameraDiv = styled.div`
  border: 10px solid white;
  display: flex;
  justify-content: center;
`

const SpecialDiv = styled.div`
width: 100%;
`

const RedColor = styled.a`
color: red;
`

const GenerateButton = styled.button`
margin-left: 3vw;
outline: none;
border: 1px solid black;
border-radius: 0.75vw;
background-color: #e8e8e8;
font-weight: 600;
font-size: 2vw;
padding: 1vw 3vw;
cursor: pointer;
transition: all 0.1s ease;

&:hover{
  transform: scale(1.05);
}
`

const FatherDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const CenteredDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ChatIcon = styled(SlBubbles)`
margin-left: 0.35vw;
margin-right: 1.25vw;
font-size: 5vw;
`

const ImpromptuPracticeContainer = styled.div`
margin-top: 1vw;
margin-bottom: 1vw;
display: flex;
height: 8vw;
flex-direction: row;
width: 90%;
border-radius: 0.75vw;
background-color: #e8e8e8;
padding: 0.25vw 0.75vw;
font-family: "Outfit", sans-serif; 
`
const Header = styled.div`
margin-top: 1.5vw;
font-size: 2vw;
`

const RandomChallange = styled.div`
margin-top: 0.5vw;
font-size: 1.25vw;
margin-bottom: 0.1vw;
`

export default ImpromptuPractice