import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import "@fontsource/outfit" 
import {SlBubbles} from "react-icons/sl"
import Webcam from "react-webcam";
// import {BsFillPlayFill} from "react-icons/bs"
import Image from 'next/image';
import StopIcon from '../../assets/StopIcon.png'
import PlayIcon from '../../assets/PlayIcon.png'

const IntreviewPrep = () => {

    const webcamRef = useRef(null);
    const QuestionsArray = ["Tell me about yourself.","How did you hear about this position?","Why do you want to work at this company?",
"What are your greatest strengths?","Tell me about a time you made a mistake.","How do you stay organized?",
"What are you passionate about?","Do you consider yourself successful?","Where do you see yourself in five years?",
"What makes you unique?","What should I know thats not on your resume?","Sell me this pen.","Do you have any questions for us?",
"How do you deal with pressure or stressful situations?","How would your boss and coworkers describe you?","Tell me about a time you demonstrated leadership skills.",
"What is your biggest achievement?","Walk me through your resume.","What is your biggest weakness?","How can you add value to this company?",
"Tell me about a time were you passed a very difficult problem."]
    const [Question, setQuestion] = useState("Tell me about yourself");
  
    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
  }
  
    function handleGenerate(){
      const result = getRandomItem(QuestionsArray)
      setQuestion(result)
    }

  return (
    <Section>
        
      <FatherDiv>
      <IntreviewPracticeContainer>
        <CenteredDiv><ChatIcon /></CenteredDiv>
        <SpecialDiv><Header>Your Intreveiw Question: </Header>
        <RandomChallange>- <RedColor>&quot;{Question}&quot;</RedColor></RandomChallange>
        </SpecialDiv>
        <CenteredDiv><GenerateButton onClick={handleGenerate}>Generate Question</GenerateButton></CenteredDiv>
      </IntreviewPracticeContainer>
      </FatherDiv>
      {/* <GreatSection> */}
      <CameraDiv>
        <Webcam
          ref={webcamRef}
          mirrored={true}
          height={480}
          >
        </Webcam>
      </CameraDiv>
      <ButtonContainer>
        <MiniContainer>
          <PlayButton><PlayIconContainer><Image src={PlayIcon}/></PlayIconContainer></PlayButton>
          <ContainerText>RECORD</ContainerText>
        </MiniContainer>
        <MiniContainer>
          <StopButton><StopButtonContainer><Image src={StopIcon}/></StopButtonContainer></StopButton>
          <ContainerText>STOP</ContainerText>
        </MiniContainer>
      </ButtonContainer>
      {/* </GreatSection> */}
    </Section>
  )
}

const GreatSection = styled.section`
display: flex;
flex-direction: row;
width: 100%;
`
const ButtonContainer = styled.section`
margin: 0 auto;
display: flex;
flex-direction: row;
// background-color: red;
width: 100%;
height: 20%;
justify-content: center;
align-items: center;
`
const PlayButton = styled.button`
height: 4vw;
width: 4vw;
// justify-content: center;
// align-items: center;
background-color: #99ccff;
border-radius: 2vw;
border: 0.4vw solid white;
`
const PlayIconContainer = styled.div`
display: flex;
img{
  margin: auto auto;
  width: 2.5vw;
  height: 2.5vw;
}
`
const StopButton = styled.div`
height: 3.5vw;
width: 3.5vw;
// justify-content: center;
// align-items: center;
background-color: #99ccff;
border-radius: 0.75vw;
border: 0.4vw solid white;

`
const StopButtonContainer = styled.div`
display: flex;

width: 100%;
height: 100%;

img{
  margin: auto auto;
  width: 2.5vw;
  height: 2.5vw;
}
`

const ContainerText = styled.div`
font-size: 2vw;
font-weight: 900;
margin-left: 4%;
margin-right: auto;
color: #003366;
`

const MiniContainer = styled.div`
width: 15%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
// background-color: yellow;
margin: 0 2%;
flex-direction: row;
`

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

const IntreviewPracticeContainer = styled.div`
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


export default IntreviewPrep