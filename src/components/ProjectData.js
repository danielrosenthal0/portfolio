import topshot from "./Assets/topshot.gif";
import output from "./Assets/output_gif.gif"
// import demo from "./Assets/demo_trim.mp4";
import ultra from "./Assets/ultrasoniceyes.png";
import ultragif from "./Assets/ultrasoniceyes.gif";
// import plauly from "./Assets/plauly.mp4"
const ProjectData = [
  {
    id: "hyzerberg-technologies",
    title: "Engineering Capstone Project",
    description: [
      '<a class="active" href="https://frolf-website.vercel.app/" target="_blank" rel="noopener noreferrer">Here</a> is our website I built for my team - it goes into a bit more detail than I do here',
      "My senior Engineering Capstone Project was focused on building a disc golf simulator, similar to a traditional golf simulator you may see in a barcade or local golf store",
      "I worked with three other students to eventually create a working prototype over the course of our school year",
      "The prototype consisted of a reComputer J1020 NVIDIA Jetson Nano module computer, two CSI cameras interfacing with the J1020, and a customized rig and netting to house the simulator",
      "We were able to manually calculate the six flight parameters needed to simulate disc flight - velocity, spin rate, nose angle, vertical launch angle, horizontal launch angle, and bank - but this was a slow process and did not provide meaningful feedback to users",
      "We were successfully able to calculate velocity and nose angle instantaneously and return these values immediately to the user, which was quite the accomplishment given our budget and hardware limitations",
    ],
    images: [topshot, output],
    video: "https://res.cloudinary.com/dnnvr9pg3/video/upload/v1755228005/demo_trim_n44b1h.mp4",
  },
{
    id: "smart-robot",
    title: "Autonomous Navigation Robot (Pololu Romi)",
    description: [
      "Developed a comprehensive autonomous navigation system for a Pololu Romi robot using Arduino C++ and subsumption architecture with multiple behavioral states.",
      "Implemented real-time obstacle detection and avoidance using ultrasonic rangefinder sensors with configurable warning and danger distance thresholds for safe navigation.",
      "Built a sophisticated state machine with three primary behaviors: random wandering for exploration, collision avoidance for obstacle detection, and proportional control for smooth obstacle navigation.",
      "Created intelligent random movement algorithms using seeded random number generation for unpredictable exploration patterns with dynamic distance and turning angle calculations.",
      "Integrated multi-color LED feedback system (RGB) to provide visual status indicators for different operational states and behaviors during autonomous operation.",
      "Developed advanced line-following capabilities with PID control systems, IR remote control integration, and autonomous delivery navigation using intersection detection and dead reckoning.",
      "Implemented complex navigation behaviors including pickup and delivery sequences, free-range searching algorithms, and mapping-based path planning for structured environments."
    ]
},
  {
    id: "lionize",
    title: "Lionize.ai Internship",
    description: [
      'I had a data analytics internship with <a href="https://lionize.ai/" class="active" target="_blank" rel="noopener noreferrer">Lionize.ai</a>, a startup focused on the influencer marketing cycle founded by a few Wake Forest grads',
      "Lionize is essentially the middleman between large businesses and influencers: businesses hire Lionize to help them find new influencers to potentially market their specific product and Lionize uses proprietary algorithms to help scope out these influencers",
      "This was my first foray into data analytics and my job was to help create some of these algorithms and work on decision trees as to what makes a good influencer",
      "I scraped all the posts on specific hashtags on Instagram - for instance, #yoga for the meditation app Calm - and compiled the list of accounts in Excel",
      "I would then calculate which profile characteristics - followers, location, engagement, number of comments, number of posts, whether they had a link in their profile - were the best signs of someone being a good influencer by comparing these numbers to a visual analysis of the profile using Python",
      "I was then able to determine which profiles were ideal and then expanded this analysis from a small dataset to a larger one, and Lionize was then able to reach out to these potential influencers",
      "I was relatively successful and was able to increase the number of influencer submissions to Lionize significantly",
  
    ],
    images: [],
    video: "",
  },

  {
    id: "ultrasonic",
    title: "Ultrasonic Eyes",
    description: [
      "Ultrasonic eyes was a project in my electrical engineering class junior year",
      "The goal was to create a project and a set of instructions using an Arduino so that freshmen engineering students would be able to complete the project with minimal knowledge of electrical engineering and instrumentation",
      "I created this ultrasonic eyes device using two ultrasonic sensors, two LED matrices, an Arduino Uno, and a custom 3D printed housing",
      "The gif shows the device in action - the eyes follow whatever object is placed in front of it as the object moves horizontally",
      "The image shows the more realistic final design of the eyes, but I unfortunately did not take a video with the new eyes before the project was submitted",
      'The full instructions for the project labture can be found <a class = "active" href="./Assets/311 Final Project Labture final .pdf" target="_blank" download>here</a>',
    ],
    images: [ultra, ultragif],
    video: "",
  },
  {
    id: "research",
    title: "Summer 2021 Research",
    description: [
      "Over the summer of 2021, I worked in Professor Kyle Luthy's Lab at Wake Forest University. While this was a remote position due to COVID, I was able to work on a few things to assist in his research",
      "Professor Luthy's research is varied but generally focuses on environmental monitoring using pretty sweet devices",
      "One facet of his research is the monitoring of controlled grassland burns in the areas surrounding Wake Forest with drones and remote sensors",
      'My work began with setting up multiple Raspberry Pi atmospheric sensors to eventually be put to use in a <a class = "active" href = "https://www.icdp.ucar.edu/core-programs-1/3dpaws/" target = "_blank" rel = "noopener noreferrer">3D PAWS weather station</a>',
      "Once these were set up, my next task was to set up a dashboard to display this data",
      'We elected to use the <a class="active" href="http://3d.chordsrt.com/" target="_blank" rel="noopener noreferrer">CHORDS</a>  portal to receive and display this data and we hosted the site on AWS EC2',
      "I set up the portal by adding specific instruments to our site and then sending loads of test data",
      "The portal only displays data at a frequency of every minute so my next task was to see if we could send data more rapidly to the dashboard. We wanted to reach higher frequencies of data transmission because the sensors are monitoring very fast fires as they move across a grassland",
      'I wrote a few scripts to generate fake data and send that newly-generated data to the dashboard, seen <a class="active" href="https://github.com/danielrosenthal0/luthy_labs" target="_blank" ref = "noopener noreferrer">here</a>',
    ],
    images: [],
    video: "",
  },

{
    id: "face-api",
    title: "In-Browser Face Recognition",
    description: [
      "<a href='https://face-rec-demo.vercel.app/' class='active' target='_blank' rel='noopener noreferrer'>This</a> is a real-time face recognition web application built with React and the Face-API.js library for client-side facial analysis.",
      "Implemented live webcam integration using the Web Media API to capture video streams and process them for face detection without server dependencies.",
      "Integrated multiple pre-trained neural network models including TinyFaceDetector, face landmark detection, face recognition, and facial expression analysis for comprehensive face analysis.",
      "Built a responsive canvas overlay system that renders real-time face detection boxes, 68-point facial landmarks, and emotion recognition directly on the video feed.",
      "Developed asynchronous model loading with proper state management using React hooks to ensure all AI models are initialized before starting face detection.",
      "Deployed as a lightweight, privacy-focused application on Vercel where all face processing occurs locally in the browser without sending data to external servers."
    ]
},
{
    id: "turnstile",
    title: "Turnstile",
    description: [
      "A full-stack web application attempting to connect emerging musicians with established artists in the music industry, built with React frontend and serverless AWS backend architecture.",
      "Implemented comprehensive user authentication using AWS Cognito with complete sign-up, login, and password reset functionality for secure user management.",
      "Developed audio visualization features using WaveSurfer.js library, enabling users to upload and visualize their music tracks with professional waveform displays.",
      "Built a robust serverless backend using AWS Lambda functions with Node.js 20.x runtime, including dedicated file service for music upload and retrieval operations.",
      "Integrated AWS S3 for scalable music file storage with presigned URL generation for secure file access and efficient content delivery.",
      "Deployed frontend on Vercel with proper CORS configuration and implemented search functionality to help users discover songs and connect with other artists.",
      "Utilized Serverless Framework for infrastructure as code, ensuring scalable and cost-effective deployment with separate development and production environments.",
      "Unfortunately, I let the AWS free tier expire, so the app is no longer live, but you can still view the code on GitHub.",
      "<a href='https://github.com/danielrosenthal0/turnstile' class='active' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>"


    ]
  },  
  {
    id: "plauly",
    title: "Plauly",
    video: "https://res.cloudinary.com/dnnvr9pg3/video/upload/v1755227857/Screen_Recording_2025-08-14_at_10.44.18_PM_m1gxjb.mov",
    description: [
      "A full-stack web application that intelligently suggests which Spotify playlist a new song belongs to using a custom scoring algorithm.",
      "Built with Node.js Express backend featuring Spotify OAuth 2.0 integration, session management, and comprehensive API endpoints for user authentication and playlist analysis.",
      "Developed a playlist classification engine that analyzes artist matches, genre compatibility, and popularity scores to recommend the most suitable playlist for any given track.",
      "Implemented secure Spotify Web API integration with proper token management, refresh token handling, and comprehensive error handling for reliable music data retrieval.",
      "Created a modern React/Next.js frontend with TypeScript, featuring real-time song analysis, visual playlist recommendations, and seamless playlist modification capabilities.",
      "Designed an intelligent scoring system that combines multiple factors: +2 points for artist matches, +2 points for genre alignment, and weighted popularity scoring to account for Spotify's deprecated audio analysis APIs.",
      "Built responsive UI components with loading states, success feedback, and intuitive song URL parsing to provide a smooth user experience for playlist management and music discovery.",
      "Unfortunately, Spotify only allows approved organizations to make applications public. Therefore, this app will have to remain as a local build for the time being. The video below is only searching my 5 most recent playlists for speed purposes. Spotify has deprecated song analysis APIs, so I want to work on using custom audio features to accurately describe a playlist.",
      "<a href='https://github.com/danielrosenthal0/playlist' class='active' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>"

    ]
  }, 
]

export default ProjectData;