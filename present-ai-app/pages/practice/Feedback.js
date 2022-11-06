import React from 'react'
import styled from 'styled-components'

export const Feedback = () => {
  return (
    <MainBody>
        <MainContainer>
            <MainHeader>Summary Page</MainHeader>
            <ListContainer>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Fillers</ListItemTitle>
                        <Score>Score: 50/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </ListDataItem>
            
                </ListDataContainer>
                </ListItem> 


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Gesture Noise</ListItemTitle>
                        <Score>Score: 50/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </ListDataItem>

                </ListDataContainer>
                </ListItem>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Gesture Frequency</ListItemTitle>
                        <Score>Score: 50/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </ListDataItem>

                </ListDataContainer>
                </ListItem>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Pace</ListItemTitle>
                        <Score>Score: 50/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </ListDataItem>

                </ListDataContainer>
                </ListItem>


                <ListItem> 
                    <ListFrontContainer>
                        <ListItemTitle>Your Speech</ListItemTitle>
                        <Score>50/100</Score>
                    </ListFrontContainer>
                <ListDataContainer>
                <ListDataItem>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </ListDataItem>

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