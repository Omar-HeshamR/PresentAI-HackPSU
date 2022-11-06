# PresentAI
Ace all your intreviews and assigments with our AI-powered, research-based instant feedback!

## Inspiration
Imagine presenting a project when your anxiousness, lack of preparation, and fear of public speaking hit you all at once. Social phobia, also called social anxiety disorder, is the third most common mental health disorder after depression and substance abuse, affecting as many as 10 million Americans. This commonly shared feeling among all people was the catalyst for the Present AI. We wanted to develop a full-stack web application that uses AI to return research-supported feedback and serves as a coach for future improvement. Growing up in the information age, we understand how vital it is to communicate ideas and messages effectively. According to a study published in Journal of Education and Educational Development, out of 50 business students in private school in Karachi 75% admitted to fear of public speaking and 90% agreed if proper counseling, instruction and coaching is provided, they could overcome this fear. With Present AI, we can empower the average person to become a capable and confident presenter! 

## What it does
Present AI is a full-stack web application that determines how well you presented when you recorded yourself giving a speech on the app. It examines your presentation over five research-based metrics and scores you on each. It looks for whether you have used filler words, gesture noise, gesture frequency, pace, and the consistency of your speech overall. It is intended to be used as a tool for users to prepare for a real-life presentation that they might have to deliver, sharpen their overall presentation skills by responding to impromptu topics, and for teachers to save time grading the work of their students. Overall, Present AI is a platform that utilizes AI to assess your presentation in and out, examining it from various points of view. 

## How we built it
We built our app using React.js, a modern and versatile JavaScript framework. Regarding the front-end development that took place, it was developed using HTML, CSS, Node.js, and Styled Components. Most of the user interface (UI) was done by Styled Components, allowing us to build the visual aspect of our application quickly. 
The most crucial component of the app, the AI-powered back-end, was developed with Tensorflow.js and a library called Hand Pose Detection. The AI determines if a user is conversing with hand gestures (effective body language), which is the backbone of a well-delivered speech. The app detects the frequency of hand gestures, meaning it can understand if a user has not used enough hand gestures, used the right amount of hand gestures, or even used too much. In other words, the program considers this data and gives feedback for the user to watch out for the next time they present. In addition, the app determines gesture movement to determine if the user is genuinely utilizing body language, making it infeasible to trick the algorithm. The algorithm examines the joints of the user’s hands, tracks how they move every gesture, and then averages the positions to get an accurate representation of whether users utilized enough genuine gestures within the speech. Moreover, the AI converts the user’s speech to text. It determines the pace by assessing the number of words over the time interval and whether the user has used an exceeding amount of filler words; it again considers this data and outputs feedback according to it. 

## Challenges we ran into
The first obstacle we ran into was applying speech recognition using the react-voice-recorder that came with a user interface and implementation that was not suitable for our model. Instead, we extracted an audio file from the webcam video file with an .ogg file extension. We were then able to upload this file to AssemblyAi for speech to text conversion. Due to time constraints, we were not able able to connect our results from AssemblyAi to the summary on our deployed webpage. 

## Accomplishments that we're proud of
- Utilizing many APIs to develop more innovatively.
- Reacting an entirely visually responsive web application that uses a modern and sleek UI.
- Solving a widespread problem with Artificial Intelligence (AI).

## What we learned
- We learned that implementing AI that assesses hand gestures and speech needs to process a lot of data. That data needs to be stored and accessed efficiently to retrieve information relevant to the program. 
- We also learned that this specific information needed to be presented more straightforwardly (as a score), so some equations based on the data had to be derived to determine which presentations were better than others.
- We learned technical skills in JavaScript, React.js, Node.js, HTML, CSS, Styled Components, and APIs.
- Effective communication and collaboration are one of the most important aspects of good teamwork.

## What's next for Present AI
- Deploying the application for mobile environments as well, so say, users can practice a quick presentation or speech on the go. 
- Further implement AssemblyAi to add features such as content detection, fact checking, and sentiment analysis.
- Promote social e-engagement by allowing users to comment on each other’s speeches and give feedback. 
- Push PresentAi towards classrooms to aid teachers in an objective grading system
Further advance interview prep feature to include popular questions organized by company
