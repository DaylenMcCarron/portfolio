import {useEffect, useState } from "react"

interface ProjectData {
  name: string;
  description: string;
  link: string;
  technology: string;
  imageName: string;
}

interface ProjectCardProps {
  projectData: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData }) => {
  const [picNum, setPicNum] = useState(1);

const changePic = () => {
  if (picNum === 3) {
    setPicNum(1);
  } else if (picNum === 2) {
    setPicNum(3);
  } else if (picNum === 1) {
    setPicNum(2);
  }
};

// Call changePic initially and then every 5 seconds
useEffect(() => {
  const intervalId = setInterval(changePic, 8000);

  // Cleanup function to clear the interval when the component unmounts
  return () => clearInterval(intervalId);
}, [picNum]);
  
  
  return (
    <div className='h-fit md:w-[50vw] w-[90%] border-[1px] mx-auto m-20 border-slate-400 rounded-3xl glassbg shadow-2xl shadow-slate-900 hover:shadow-slate-600 duration-200' >
      <div className='w-[98%] h-[80%]  m-auto mt-3 rounded-t-2xl'>
        <img src={`/assets/${projectData.imageName}${picNum}.png`} className=" object-contain w-full h-full bg-black m-auto mt-3 rounded-2xl border-slate-500 border-[1px]" alt="" />
      </div>
      <div>
        <h2 className="text-white mx-6 my-1 font-bold text-xl">{projectData.name}</h2>
        <p className="text-white mx-6 font-light">{projectData.description}</p>
        <h2 className="text-white mx-8 text-md my-3">{projectData.technology}</h2>
        <a href={projectData.link} target="_blank" className=" text-sky-200 ml-4 font-bold bg-[#ffffff22] border-white border-[1px] rounded-b-2xl p-3 md:right-[30%] absolute ">Open Project</a>
      </div>
    </div>
  )
}

export default ProjectCard