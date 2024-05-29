import {useEffect, useState } from "react"


const ProjectCard = () => {
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
    <div className='h-[80%] w-[50vw] border-[1px] mx-auto m-20 border-slate-400 rounded-3xl glassbg shadow-2xl shadow-slate-900' >
      <div className='w-[98%] h-[80%]  m-auto mt-3 rounded-t-2xl'>
        <img src={`/assets/aaad${picNum}.png`} className=" object-contain w-full h-full bg-black m-auto mt-3 rounded-2xl border-slate-500 border-[1px]" alt="" />
      </div>
      <div>
        <h2 className="text-white mx-6 my-1 font-bold text-xl">An-Apple-A-Day - (Hackathon project)</h2>
        <p className="text-white mx-6 font-light">An AI tool that can help you with diagnosis of provided symptoms</p>
        <h2 className="text-white mx-8 text-md mt-3">HTML, CSS, Javascript, React</h2>
        <h2>Link</h2>
      </div>
    </div>
  )
}

export default ProjectCard