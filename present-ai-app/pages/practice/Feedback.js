import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../../Components/StateContext';


export const Feedback = () => {

const { gestureData, fetchLatestGestureData } = useStateContext();
console.log(fetchLatestGestureData())

function GestureNoiseTip(gesture_noise){
    if (gesture_noise < 60){
        return "Gestures were too light; can be more expressive!"
    } else if (gesture_noise > 150){
        return "Hand movement was too rapid; should be more controlled."
    } else{
        return "Appropriate level of gesture movement, keep up the good work!"
    }
}

function GestureFrequencyTip(x){
    if (x < 0.5){
        return "Not enough gestures! Try to be more communicative with your hand!"
    } else if (x > 1.0){
        return "You are using way too many gestures! reduce it down!"
    } else{
        return "Gestures frequency is on point and are perfect! Good Work!"
    }

}

function freqMetricCreator(x) {
    if (x===0.75) {
        return(100);
    }
    else if(x===0.5 || x===1.0) {
        return(50);
    }
    else {
        let diff = Math.abs(0.75-x)
        let val = 200*diff
        let hundred = 100-val
        if(hundred<0){
            return(0);
        }
        else{
            hundred = hundred.toPrecision(2)
            return hundred.toString();
        }
    }
 
}

function noiseMetricCreator(x) {
    if (x===105) {
        return(100);
    }
    else if(x===60 || x===150) {
        return(50);
    }
    else {
        let diff = Math.abs(105-x)
        let val = 1.111111*diff
        let hundred = 100-val
        if(hundred<0){
            return(0);
        }
        else{
            hundred = hundred.toPrecision(2)
            return hundred.toString();
        }
    }
 
}


  return (
    <MainBody>
        <MainContainer>
            <MainHeader>Summary Page</MainHeader>
            <ListContainer>

            <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Gesture Noise</ListItemTitle>
                        <Score>Score: {noiseMetricCreator(fetchLatestGestureData()[1])}/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- {GestureNoiseTip(fetchLatestGestureData()[1])} </ListDataItem>

                </ListDataContainer>
                </ListItem>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Gesture Frequency</ListItemTitle>
                        <Score>Score: {freqMetricCreator(fetchLatestGestureData()[0])}/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- {GestureFrequencyTip(fetchLatestGestureData()[0])} </ListDataItem>

                </ListDataContainer>
                </ListItem>

                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Fillers</ListItemTitle>
                        <Score>Score: 92/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- You are only using a limited amount of fillers. Awesome! </ListDataItem>
            
                </ListDataContainer>
                </ListItem> 


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Pace</ListItemTitle>
                        <Score>Score: 77/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Your presentation moved at an appropriate pace.</ListDataItem>

                </ListDataContainer>
                </ListItem>

                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Eye Contact</ListItemTitle>
                        <Score>Score: 79/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Eye contact was varied and maintained throughout presentation.</ListDataItem>

                </ListDataContainer>
                </ListItem>

                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Facial Expressions</ListItemTitle>
                        <Score>Score: 85/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Maintained positive to neutral energy throughout presentation.</ListDataItem>

                </ListDataContainer>
                </ListItem>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Your Speech</ListItemTitle>
                        <Score>90/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>-- N/A --</ListDataItem>
                </ListDataContainer>
                </ListItem>

            </ListContainer>
        </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
width: 100%;
min-height: 100vw;
height: auto;
display: flex;
// background-color: coral;
background-color: #99ccff;
justify-content: center;
align-items: center;
`
const MainContainer = styled.div`
width: 90%;
min-height: 90vw;
height: auto;
justify-content: center;
align-items: center;
display: flex;
margin: 5vw auto;
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


const ListContainer = styled.div`

width: 95%;
min-height: 85vw;
height: auto;
justify-content: center;
align-items: center;
display: flex;
margin: auto auto;
// background-color: orange;
flex-direction: column;
`
const ListItem = styled.div`
width: 95%;
min-height: 15vw;
height: auto;
justify-content: center;
align-items: center;
display: flex;
margin: 2vw auto;
// background-color: aqua;
background-color: #ADD6FF;
flex-direction: column;
border-radius: 2vw;
`
const ListFrontContainer = styled.div`
// background-color: green;
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: row;
`

const ListItemTitle = styled.div`
margin-left: auto;
margin-right: 1%;
// background-color: red;
display: flex;
text-align: center;
font-weight: 900;
font-size: 3vw;
margin-bottom: auto;
margin-top: 1%;
color: #003366;
`
const Score = styled.div`
margin-right: auto;
margin-left: 1%;
// background-color: red;
display: flex;
text-align: center;
font-weight: 900;
font-size: 2.5vw;
// margin-bottom: auto;
margin-top: auto;
color: red;
`

const ListDataContainer = styled.div`
// background-color: yellow;
display: flex;
margin: auto auto;
width: 90%;
min-height: 10vw;
height: auto;
flex-direction: column;
`
const ListDataItem = styled.div`
text-align: center;
// background-color: blue;
margin: auto auto;
width: 95%;
min-height: 4vw;
height: auto;
font-size: 2.25vw;
font-weight: 100;
color: #003366;
`

export default Feedback