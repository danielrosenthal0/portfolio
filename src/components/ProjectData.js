import topshot from "./Assets/topshot.gif";
import output from "./Assets/output_gif.gif"
import demo from "./Assets/demo_trim.mp4";
import ultra from "./Assets/ultrasoniceyes.png";
import ultragif from "./Assets/ultrasoniceyes.gif";

const ProjectData = [
  {
    id: "hyzerberg-technologies",
    title: "Engineering Capstone Project",
    description: [
      '<a class="active" href="http://hyzerbergtechnologies.com" target="_blank" rel="noopener noreferrer">Here</a> is our super-duper cool website I built for my team - it goes into a bit more detail than I do here',
      "My senior Engineering Capstone Project was focused on building a disc golf simulator, similar to a traditional golf simulator you may see in a barcade or local golf store",
      "I worked with three other students to eventually create a working prototype over the course of our school year",
      "The prototype consisted of a reComputer J1020 NVIDIA Jetson Nano module computer, two CSI cameras interfacing with the J1020, and a customized rig and netting to house the simulator",
      "We were able to manually calculate the six flight parameters needed to simulate disc flight - velocity, spin rate, nose angle, vertical launch angle, horizontal launch angle, and bank - but this was a slow process and did not provide meaningful feedback to users",
      "We were successfully able to calculate velocity and nose angle instantaneously and return these values immediately to the user, which was quite the accomplishment given our budget and hardware limitations",
    ],
    images: [topshot, output],
    video: demo,
  },
  {
    id: "smart-robot",
    title: "Pololu Romi Robot",
    description: [
      "Developed software functionalities for a Pololu Romi robot during my senior year robotics class.",
      "Implemented algorithms and control systems to enhance the robot's performance and capabilities."
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
    id: "alquimia-analytica",
    title: "Alquimia Analytica Internship",
    description: [
      '<a href=”https://www.alquimiaanalytica.com/en/” class=”active” target="_blank" rel="noopener noreferrer">Alquimia Analytica</a> is a data analytics firm based in San Jose, Costa Rica',
      "I was able to work remotely and learned how to work with Power BI dashboards over the course of this internship",
      "I was able to fully recreate a dashboard for a Costa Rican travel agency that had multiple faulty connections between databases",
      "This was a great opportunity for me to begin learning about relational databases, Power BI, and the visual capabilities of these dashboards and the insights they can provide",
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
    id: "bithoop",
    title: "Bithoop",
    description: [
      "Served as a Junior Software Engineer at Bithoop, a startup revolutionizing information management.",
      "Developed and maintained a React.js web application with Node.js, AWS Lambda, DynamoDB, Stripe CLI, and the Serverless framework.",
      "Architected a full-stack Box API connection and implemented dynamic link-tracking features, resulting in increased user engagement."
    ]
  },
  {
    id: "fantasy",
    title: "Fantasy Premier League Mobile App",
    description: [
      "Developed a React Native mobile application utilizing the Premier League Fantasy API.",
    "Enhanced the user experience by offering a streamlined and visually appealing way for users to monitor their Fantasy Premier League teams, matchups, and live scores."
    ]
  },
  {
    id: "face-api",
    title: "In-Browser Face Recognition",
    description: [
      "<a href='https://face-rec-demo.vercel.app/' class='active' target='_blank' rel='noopener noreferrer'>This</a> is a face recognition app I built using the Face API",
    ]
  }
]

export default ProjectData;