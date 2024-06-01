
type Props = {}

function Skills({}: Props) {
  return (
    <div className='w-full h-fit'>
      <div className=' w-full h-full'>
        <h1 className='text-center text-5xl md:text-6xl text-sky-200 sixtyfour py-2 pt-12' id="Skills">Skills</h1>
         <div className=' border-[1px] border-slate-700 glassbg shadow-sm shadow-slate-500 rounded-xl h-3/4 mt-3 m-auto w-[95%] text-white md:flex'>
          <div className='basis-[30%]'>
            <img src="/assets/interface.svg" className="scale-75" alt="" />
          </div>
          <div className='basis-[5%] flex md:flex-col '>
            <div className="  h-[50%] border-[1px] border-slate-200 hover:border-slate-200 shadow-slate-400 glassbg transition-all duration-200 ">
              <h1 className=" relative top-[50%] md:-rotate-90 text-xl text-nowrap font-bold">Front-end</h1>
            </div>
            <div className="bg-glass h-[50%] border-[1px] border-slate-600 hover:border-slate-200 shadow-slate-400  transition-all duration-200">
              <h1 className=" relative top-[50%] md:-rotate-90 text-xl text-nowrap">Back-end</h1>
            </div>
          </div>
          <div className='basis-[20%]'>
            <div className="h-[95%] w-[95%] glassbg m-[2.5%] rounded-xl">
              <h1 className="m-2 text-lg">Skills:</h1>
              <div className=" h-fit w-full flex flex-wrap ">
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">HTML</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">CSS</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">JavaScript</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">NodeJS</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">TypeScript</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">React</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">Redux</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">TailwindCSS</div>
                <div className="p-1 border-[2px] rounded-md h-fit w-fit m-2">Flutter</div>
              </div>
            </div>
          </div>
          <div className='basis-[33%]'>About Skill</div>
         </div>
      </div>
    </div>
  )
}

export default Skills