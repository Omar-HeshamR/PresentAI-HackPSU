import React from 'react'
import styled from 'styled-components'
import Webcam from "react-webcam";
import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";

import * as fp from "fingerpose";


const MainPractice = () => {


  const webcamRef = useRef(null);

  const handStates = []





  //Functions for hands

  const guessHands = async () => {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      //runti
      runtime: 'tfjs', 
      modelType: 'full'
    };
    const detector = await handPoseDetection.createDetector(model, detectorConfig);
    console.log('Beginning Detection')
    setInterval(() => {
      detect(detector)
      // console.log('working')
    }, 4000)
  }

  const detect = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      // canvasRef.current.width = videoWidth;
      // canvasRef.current.height = videoHeight;
      const hands = await detector.estimateHands(video)
      if(hands.length > 0){
        //iterate over each hand
        // console.log(hands)
        let total = null
        for(let hand of hands){
          // console.log(hand)
          // console.log('Getting gestures..')
          // const GE = new fp.GestureEstimator([
          //   zeroGesture,
          //   oneGesture,
          //   twoGesture,
          //   threeGesture,
          //   fourGesture,
          //   fiveGesture,
          //   equalsGesture
          // ])

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

          handStates.push(landmarks);
          console.log(landmarks)
          

          //Gesture determination; prolly don't need
          // if(count >=5){
          //   const gestures = handStates.map((landmark) => {
          //     const gesture = GE.estimate(landmark, 4)
          //     console.log(gesture)
          //     if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          //         const confidence = gesture.gestures.map(
          //           (prediction) => prediction.score
          //         );
          //         const maxConfidence = confidence.indexOf(
          //           Math.max.apply(null, confidence)
          //         ); 
          //         return gesture.gestures[maxConfidence].name
  
          //     }  
          //   })
          //   console.log(gestures)
          //   handStates.length = 0
          // }



          // --------------OLD Gesture CODE---------------

          // const gesture = await GE.estimate(landmarks, 4);
          // // console.log('Gesture: ')
          // // console.log(gesture)
          // if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
  
          //   const confidence = gesture.gestures.map(
          //     (prediction) => prediction.score
          //   );
          //   const maxConfidence = confidence.indexOf(
          //     Math.max.apply(null, confidence)
          //   ); //gets the index of the gesture with the max certainty
          //   // console.log(gesture.gestures[maxConfidence].name)
          // }
        }

        //setting
        // if(total != null){
        //   console.log('Total: ' + String(total))
          
        //   const comps = data['comps']
        //   // console.log('Comps' + comps)
        //   if(comps.length === 0){
        //     comps.push(total.toString())
        //   }else if(comps[comps.length - 1].length > 30){
        //     comps.push(total.toString())
        //   }else{
        //     comps[comps.length - 1] = comps[comps.length - 1] + total.toString()
        //   }

        //   // setData({comps: comps})
        //   // setComp((value) => {
        //   //   return value + total.toString();
        //   // })
        // }
      }
    }
  }









  //Use effect
  // useEffect(()=>{guessHands()},[]);
  guessHands()





  return (
    <Section>
      <CameraDiv>
        <Webcam
          ref={webcamRef}
          mirrored={true}
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
margin-top: 2.5vw;
display: flex;
justify-content: center;
`

export default MainPractice