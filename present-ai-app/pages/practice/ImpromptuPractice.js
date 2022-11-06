import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import "@fontsource/outfit" 
import {SlBubbles} from "react-icons/sl"
import Webcam from "react-webcam";
import StopIcon from '../../assets/StopIcon.png'
import PlayIcon from '../../assets/PlayIcon.png'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast';
import { useStateContext } from '../../Components/StateContext';
import * as tf from "@tensorflow/tfjs";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";

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

  // GESTURE AI DETECTION:
  const router = useRouter()
  const { pushGestureData } = useStateContext();

  // const [running, setRunning] = useState(false)
  let running = false
  // const [running, setRunning] = useState({isRunning: true})
  const handStates = []

  let totalTime = 0;
  let handTime = 0;

  function stopRun(){
    running = false
    // setRecording(false)
    // console.log('Running value: ', getRunning())
    const gestureOutput = createOutput()
    console.log("FINAL DATA: ", gestureOutput)
    pushGestureData(gestureOutput[0],gestureOutput[1])
    toast.success('Preparing Quality Feedback...');
    totalTime = 0
    handTime = 0
    handStates.length = 0
    router.push("./Feedback")
    // const isRunning = running['isRunning']
    // setRunning({isRunning: false})
    // console.log('Running value',running)
    // console.log('stopped!')
    // clearInterval(inter)
    // console.log('cleared')
  }

  function startRun() {
    running = true
    toast.success(`Recording Started !`);
    // setRecording(true)
    // console.log('Running value:', getRunning())
    // const isRunning = running['isRunning']
    // setRunning({isRunning: true})
    // console.log('Running value', running)
    // console.log('started')
    // guessHands()
  }
  //Functions for hands
  
  // const getRunning = useCallback(() => {
  //   return [running]
  // }, [running])


  async function guessHands(){
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      //runtime
      runtime: 'tfjs', 
      modelType: 'full'
    };
    console.log('guess hands running')
    const detector = await handPoseDetection.createDetector(model, detectorConfig);
    setInterval(() => {

      // console.log('looping')
      if(running){
        detect(detector)
      }else{
        // handStates = []
      }
    }, 800)

  } //use 90 for setInterval

  
  async function detect(detector){
    // console.log(running)
    //   console.log('detecting...')

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

      //add to the totalTime
      totalTime += 1

      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const hands = await detector.estimateHands(video)
      if(hands.length > 0){
        //iterate over each hand
        let total = null
        const handArr = []
        for(let hand of hands){
          handTime += 1
          //convert the keypoints to 'landmarks'
          const landmarks = []
          const wristZ = hand.keypoints3D[0].z
          for(let i = 0; i < 21; i++){
            let arr = []
            arr.push(hand.keypoints[i].x)
            arr.push(hand.keypoints[i].y)
            let dif = hand.keypoints3D[i].z - wristZ
            arr.push(dif)
            landmarks.push(arr)
          }
          handArr.push(landmarks);
          // console.log(landmarks)
        }
        handStates.push(handArr)

      }else{
        handStates.push([])
      }
      // console.log('HandTime:', handTime)
      // console.log('totalTime:', totalTime)
      // console.log('HandPercent', handPercent)
      // console.log('HandStates', handStates)
      console.log('end of line')
      // if(handStates.length > 50){
      //   gradeMovement()
      //   handStates.length = 0
      // }
    }
  }

  function createOutput(){
    let timeFrac = handTime / totalTime
    let movementGrade = gradeMovement()
    console.log(movementGrade)
    if(isNaN(timeFrac) || typeof(timeFrac) == 'undefined'){
      timeFrac = 0
    }
    console.log(typeof(movementGrade))
    if(isNaN(movementGrade) || typeof(movementGrade) == 'undefined'){
      movementGrade = 0
    }
    console.log(movementGrade)
    return [timeFrac, movementGrade]
  }



  function gradeMovement() {
    console.log('grading movement')

    const movements = seperateMoves()

    const score = judgeMovement(movements)

    console.log('Score for movements:', score)
    return score
  }


  function seperateMoves(){
    const movements = []
    let movement = []
    for(let i=0; i < handStates.length; i++){
      if(handStates[i].length == 0){
        if(movement.length != 0){
          movements.push(movement)
          movement = []
        }
      }else if(i == handStates.length - 1){
        movements.push(movement)
        movement = []
      }else{
        movement.push(handStates[i][0])
      }
    }
    console.log('Movements', movements)
    return movements
  }

  


  function judgeMovement(movements){
    //runs for each full movement
    const moveAverages = []
    for(let i=0; i<movements.length; i++){


      console.log('Movement #1')
      //one individual movement
      const movementDistance = []

      if(movements[i].length > 1){
        for(let j=0; j< movements[i].length - 1; j++){
          //runs for knuckle position in movement
          const knuckDistances = []
          for(let k=0; k < 21; k++){
            const distanceBetweenKnucks = getDistance(movements[i][j][k][0], movements[i][j][k][1], movements[i][j + 1][k][0], movements[i][j + 1][k][1])
            knuckDistances.push(distanceBetweenKnucks)
          }
          movementDistance.push(knuckDistances)
        }
      console.log('Movement distance', movementDistance)

      //getting the average
      let average = 0
      const averages = []
      for(let c=0; c < 20; c++){
        const knucks = []
        for(let d=0; d < movementDistance.length; d++){
          knucks.push(movementDistance[d][c])
        }
        averages.push(getAverage(knucks))
      }
      average = getAverage(averages)
      moveAverages.push(average)

      }
    }
    
    console.log('average gesture movements:', moveAverages)
    const result = getAverage(moveAverages)
      // if(typeof(result) == 'undefined' || typeof(result) == NaN){
      //   return 0
      // }else{
        return result
      // }
  }


  function getAverage(lst){
    let total = 0;
    for(let i = 0; i < lst.length; i++) {
      total += lst[i];
    }
    return total / lst.length;
  }


  function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

  guessHands()




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
    <ButtonContainer>
          <MiniContainer>
          <PlayButton onClick={startRun} ><PlayIconContainer ><Image src={PlayIcon}/></PlayIconContainer></PlayButton>
          <ContainerText>RECORD</ContainerText>
          </MiniContainer> 
          <MiniContainer>
          <StopButton onClick={stopRun}><StopButtonContainer ><Image src={StopIcon}/></StopButtonContainer></StopButton>
          <ContainerText>STOP</ContainerText>
          </MiniContainer>    
      </ButtonContainer>
    </Section>
  )
}



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
cursor: pointer;
`
const PlayIconContainer = styled.div`
display: flex;
justifty-content: center;
align-items: center;

img{
  margin: auto auto;
  width: 1.75vw;
  height: 1.75vw;
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
cursor: pointer;
`
const StopButtonContainer = styled.div`
display: flex;
justifty-content: center;
align-items: center;
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
const MiniContainer2 = styled.div`
width: 30%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
// background-color: yellow;
margin: 0 2%;
flex-direction: row;
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
  height: 70vw;
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