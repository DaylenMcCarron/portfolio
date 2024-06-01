
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
  const Project1 = {name:"An-Apple-A-Day - (Hackathon project)",description:" An-Apple-A-Day is a website where users can enter their symptoms to identify potential health issues with the help of AI",link:"https://github.com/siripiripiri/JavaChips",technology:"It is built using React, Firebase, Flask, and the Gemma Model, with Vite for tooling", imageName:"aaad"};
  const Project2 = {name:"The Coffee Place - (Live Website)",description:"The Coffee Place is an online store where users can purchase coffee. ",link:"https://thecoffeeplace.vercel.app",technology:"The website is built using HTML, CSS, JavaScript, Tailwind, and React.",imageName:"tcp"};
  const Project3 = {name:" QuickNoms - Q-Commerce Platfrom - (College Project)",description:"QuickNoms is a Q-Commerce platform that consists of a user, restaurant and delivery partner app.",link:"https://github.com/DaylenMcCarron/QuickNoms",technology:"It has been created using Flutter and Dart for the app, Firebase RTDB, Firestore, FCM, Firebase Cloud Storage",imageName:"qn"};
  return (
    <div className='h-fit w-[100vw]'><h1 className='text-center text-5xl md:text-6xl text-sky-200 sixtyfour py-2 shadow-white pt-12' id='Projects'>Projects</h1>
     <div className='flex w-full h-fit  flex-col  pt-8'>
     <ProjectCard projectData={Project1}/>
     <ProjectCard projectData={Project2}/>
     <ProjectCard projectData={Project3}/>
     <img className='fixed -z-10 bottom-0 h-[40%] md:h-fit' src="https://www.freepnglogos.com/uploads/mountain-png/mountain-png-uplyft-creative-branding-design-development-fort-33.png" alt="" />
     </div>
     </div>
  )
}

export default Projects