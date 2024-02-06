import React, { useState } from 'react'

interface Person {
  [index:string]: string

}

type Props = {}

const Display = (props: Props) => {
  
  let posx = ''
  document.addEventListener('mousemove', (e) => {
    let posx = e.pageX/15
    let posy = e.pageY/15
    document.getElementById('js_icon')?.setAttribute("style",`left:${200+posx}px;top:${100+posy}px`)
    document.getElementById('ts_icon')?.setAttribute("style",`left:${700+posx}px;top:${150+posy}px`)
    document.getElementById('java_icon')?.setAttribute("style",`left:${300+posx}px;top:${200+posy}px`)
    document.getElementById('react_icon')?.setAttribute("style",`left:${650+posx}px;top:${250+posy}px`)
    

    // js = `${200 + x/10}px`
  })

  return (
    <div className=' h-screen text-cyan-50 bg-gradient-to-br from-black via-70% via-slate-800 to-slate-900'>
      <div className=' w-[100vw] h-[100vh absolutebottom-2/4' id="demo">
        <div id='js_icon' className={` w-12 h-12 bg-cyan-500 absolute top-[100px] rounded-md hover:shadow-2xl hover:shadow-white hover:border-white hover:border-2`}></div>
        <div id='ts_icon' className={` w-10 h-10 bg-cyan-500 absolute top-[100px]`}></div>
        <div id='java_icon' className={` w-10 h-10 bg-cyan-500 absolute top-[100px]`}></div>
        <div id='react_icon' className={` w-10 h-10 bg-cyan-500 absolute top-[100px]`}></div>
      </div>
    </div>
  )
}

export default Display