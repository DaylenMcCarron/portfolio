import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='w-full h-[70vh]'>
      <div className=' w-full h-full'>
        <h1 className='text-center text-6xl text-sky-200 sixtyfour border-t-2 py-2 pt-12'>Skills</h1>
         <div className=' border-[1px] border-slate-700 shadow-sm shadow-slate-500 rounded-xl h-3/4 mt-3 m-auto w-[95%] text-white flex'>
          <div className='basis-[30%]'>Pic</div>
          <div className='basis-[5%] '>Front or Backend</div>
          <div className='basis-[32%]'>Skills</div>
          <div className='basis-[33%]'>about da skill</div>
         </div>
      </div>
    </div>
  )
}

export default Skills