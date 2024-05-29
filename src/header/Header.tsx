import { SmoothScroll } from '@morev/smooth-scroll'
const Header = () => {
  

  
  function doScroll( destination = "") {
    const isMotionless = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scroll = new SmoothScroll({
      offset:-80,
      duration: isMotionless ? 0 : 800
    });
    scroll.to(destination);
  }
  return (
    <div className=" z-50 backdrop-blur-sm fixed border-b-[1px] border-slate-600 shadow-md w-screen text-white">
      <div  className=" absolute text-4xl left-5 h-[100%] p-4">
        <h1 className=" text-slate-300">PORTFOLIO</h1>
      </div>
      <ul className=" max-w-7x1 flex items-baseline justify-end space-x-16 mr-16 p-6">
        <li className=" hover:text-slate-500 transition-colors duration-200 cursor-pointer" onClick={()=>doScroll('#AboutMe')}>About Me</li>
        <li className=" hover:text-slate-500 transition-colors duration-200 cursor-pointer" onClick={()=>doScroll('#Skills')}>Skills</li>
        <li className=" hover:text-slate-500 transition-colors duration-200 cursor-pointer" onClick={()=>doScroll('#Projects')}>Projects</li>
        <li className=" hover:text-slate-500 transition-colors duration-200 cursor-pointer" onClick={()=>doScroll('#Resume')}>Resume</li>
        <li className=" hover:text-slate-500 transition-colors duration-200 cursor-pointer" onClick={()=>doScroll('#Contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Header