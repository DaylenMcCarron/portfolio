const Header = () => {
  return (
    <div className=" z-50 backdrop-blur-sm fixed border-b-[1px] border-slate-600 shadow-md w-screen text-white">
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