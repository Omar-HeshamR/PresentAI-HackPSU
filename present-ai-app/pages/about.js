import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle';

const about = () => {
  return (
    <MainBody>
      <Particle />
      <MainContainer>
        <AboutUs>About Us</AboutUs>
        <Subheading>Why Present AI?</Subheading>
        <Fact>A study found that public speaking was selected more often as a common fear than any other fear, including death.</Fact>
        <Subheading>Present AI Features</Subheading>
        <ListContainer>
            <ListItem><p><b>1. Interview Prep:</b> Utilize our groundbreaking technology and AI to prepare for your interviews. Practice answering interview questions in a more optimal manner.</p></ListItem>
            <ListItem><p><b>2. Become a Better Presenter with our Plans:</b> Present AI offers customized plans that suit the needs for different types of presenting.</p></ListItem>
            <ListItem><p><b>3. Impromptu Practice:</b> Practice a wide range of random topics to train your brain to speak and think in faster ways, developing your extemporaneous speaking and presenting skills.</p></ListItem>
            <ListItem><p><b>4. Assignment Practice:</b> Get AI-powered and research-based feedback on your assignments, giving you an idea of how well you will do.</p></ListItem>
            <ListItem><p><b>5. Teacher Grading:</b> Save tons of time grading coursework by using Present AI instead of wasting countless hours manually grading presentations.</p></ListItem>
        </ListContainer>
      </MainContainer>
    </MainBody>
  )
}

const MainBody = styled.div`
width: 100%;
height: 100vw;
display: flex;
// background-color: coral;
background-color: #99ccff;
justify-content: center;
align-items: center;
`
const MainContainer = styled.div`
width: 90%;
height: 95%;
// background-color: yellow;
flex-direction: column;
justify-content: center;
align-items: center;
`

const AboutUs = styled.div`
text-align: center;
font-size: 10vw;
// background-color: orange;
// color: black;
margin-bottom: auto;
font-weight: 900;
color: #003366;
`
const Subheading = styled.div`
text-align: center;
font-size: 4vw;
// background-color: red;
// color: white;
margin-bottom: 4%;
margin-top: 4%;
font-weight: 700;
color: #003366;
`
const Fact = styled.div`
text-align: center;
font-size: 2vw;
// background-color: blue;
// color: white;
margin-top: 2%;
margin-bottom: auto;
margin-left: auto;
margin-right: auto;
width: 50%;
color: #003366;
`
const ListContainer = styled.div`
margin-top: 2%;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
width: 80%;
height: 50%;
justify-content: center;
align-items: center;
// background-color: coral;
`
const ListItem = styled.div`
display: flex;
width: 90%;
// background-color: aqua;
margin: auto auto;
text-align: center;
font-size: 2vw;
// font-weight: 700;
color: #003366;
`


export default about