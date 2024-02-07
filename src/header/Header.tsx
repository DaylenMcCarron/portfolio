const Header = () => {
  return (
    <div className=" z-50 backdrop-blur-sm fixed border-b-[1px] border-slate-600 shadow-md w-screen text-white">
      <div  className=" absolute text-4xl left-5 h-[100%] p-4">
        <h1 className=" text-slate-300">PORTFOLIO</h1>
      </div>
      <ul className=" max-w-7x1 flex items-baseline justify-end space-x-16 mr-16 p-6">
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header