import { useEffect, useState } from 'react'
import { BoxesCore } from '../ui/background-boxes';
import { SparklesCore } from '../ui/sparkles';
import { isMobile } from 'react-device-detect';

// interface Person {
//   [index:string]: string

// }


const Display = () => {
  // let posx = 0;
  // let posy = 0;
  
  const[arrowPos,setArrowPos] = useState(0);


  const Image = () => {
    useEffect(() => {

      // Your logic based on arrowPos value
      if (arrowPos === 0) {
        console.log("Arrow: " + arrowPos);
      } else if (arrowPos === 1) {
        console.log("Arrow: " + arrowPos);
      } else if (arrowPos === 2) {
        console.log("Arrow: " + arrowPos);
      } else if (arrowPos === 3) {
        console.log("Arrow: " + arrowPos);
      } else if (arrowPos === 4) {
        console.log("Arrow: " + arrowPos);
      } else if (arrowPos === 5) {
        console.log("Arrow: " + arrowPos);
      }
    }, [arrowPos]);
  
    // Conditional rendering based on arrowPos
    return (
      <>
      
      <BoxesCore />
      <SparklesCore />
        {/* {arrowPos === 5 && (
          <div className='w-1/2 h-1/2 absolute left-1/4 bottom-[9vh] flex align-bottom justify-center'>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAC3t7fLy8vIyMi6urq1tbW8vLyysrI+Pj7g4ODMzMzm5ubj4+Pv7+9eXl40NDRWVlampqb5+fmFhYVvb28nJycvLy+Li4tpaWk7OztjY2N/f3/z8/MbGxvW1taamppMTEzLYhRGAAACgElEQVR4nO3d21JaQRBG4Y0aw0FQRIgmMcL7v2RMNCkRmBxqprpm9fquvei/pmf3sKGcYZAkSZIkSZIkSZIkSf9nMb6e3EyWt/PoQhpZ3Y1+WS+ii2lhuhm9MYsup77paN9ZdEG1rT69Szj6GF1SZffvA9JWcXUYEBbx7FjC0Yfosip6OJqQtBcnxxOCGvXgSYqL+PlUQkyjfjmZkLKK49MJIREfCwkhEb+WIiL24uM3/Co+lRIyIl4UIyIOcOf8iOVVTNCoiIjlRkUMjXJExComaNQEERPsxQSrmD4i4nTjAS66vBoSREwwNDzARZdXQ4KIDo3o8mpIH9Gh0Yf0jYqI6AEuurwaEjRqgoge4KLLqyFBRIdGdHk1JGjUBBEdGtHl1ZA+IqJRHRrR5dVQjngZXV4N6Q9wiFVM0KgJHjezYsT9uTjfLou/Qe7Sm0a9WkcX08bl3y12z14btbxh+3bxs0Wjq2jq6jkhdA++enh+ikbX0Nh82EaX0Nh22EWX0Nhu2Pz5j7q2GaIraC7BGu6iS2hsl+BZyp+H/DNNgnMp/7NFgs+HCT7jJ3hP06t/edfWJfz7Uvw7b/z3FvjvnvAtin/I4L/Hx/8WA9+i+ID437XhVxAfED8mkh/VACuID+iY6B0+oGOid/gWxQfE70H8/1TAtyg+oEe13uED4seER7Xe4QMmHxP4gIAWxQd0TPQOH9CjWu/wLYoP6FGtd/j7nvh3duHvXePfnce//5B/hyX/HlL+XbL8+4D5dzrz7+Xm360+3NMDDquDpyloD76Yslfwh+neP3iYRZfTwurud771IrqYRhbj68nNZHk7jy5EkiRJkiRJkiRJkqQA3wFABCtCO91OvAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        )}
        {arrowPos === 1 && (
          <div className='w-1/2 h-1/2 absolute left-1/4 bottom-[9vh] flex align-bottom justify-center'>
            <img
              src="https://www.svgrepo.com/show/72768/arrow-pointing-left.svg"
              alt=""
            />
          </div>
        )}
        {arrowPos === 4 && (
          <div className='w-1/2 h-1/2 absolute left-1/4 bottom-[9vh] flex align-bottom justify-center'>
            <img
              src="https://www.svgrepo.com/show/348239/arrow-right-top.svg"
              alt=""
            />
          </div>
        )}
        {arrowPos === 2 && (
          <div className='w-1/2 h-1/2 absolute left-1/4 bottom-[9vh] flex align-bottom justify-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/280.png"
              alt=""
            />
          </div>
        )}
        {arrowPos === 3 && (
          <div className='w-1/2 h-1/2 absolute left-1/4 bottom-[9vh] flex align-bottom justify-center'>
            <img
              src="https://www.pngitem.com/pimgs/m/19-192638_arrow-simple-black-top-arrow-pointing-up-png.png"
              alt=""
            />
          </div>
        )}
        {arrowPos === 0 && (<></>
          // Add your logic for arrowPos === 5 here
        )} */}
      </>
    );
  
  }
 
  useEffect(() => {
    
    if(!isMobile)
    {
    
    const handleMouseMove = (e: { pageX: number; pageY: number }) => {
      let posx = e.pageX / 15;
      let posy = e.pageY / 15;
  
      // let newArrowPos = 0;
      // if(posy <  screen.height / 15) {
      // if (posx > screen.width * 2 / 60) {
      //   newArrowPos = posy > screen.height / 30 ? 5 : 4;
      // } else if (posx < screen.width * 2 / 60 && posx > screen.width / 60) {
      //   newArrowPos = posy > screen.height / 30 ? 0 : 3;
      // } else if (posx < screen.width * 1 / 60) {
      //   newArrowPos = posy > screen.height / 30 ? 1 : 2;
      // }}
      // setArrowPos(newArrowPos);

      
    // layer 1
    document.getElementById('postgres_icon')?.setAttribute("style",`left:${100+posx}px;top:${600+posy}px`)
    document.getElementById('node_icon')?.setAttribute("style",`left:${150+posx}px;top:${100+posy}px`)
    document.getElementById('c++_icon')?.setAttribute("style",`left:${550+posx}px;top:${125+posy}px`)
    document.getElementById('linux_icon')?.setAttribute("style",`left:${350+posx}px;top:${300+posy}px`)
    document.getElementById('react_icon')?.setAttribute("style",`right:${200-posx}px;top:${150+posy}px`)
    document.getElementById('java_icon')?.setAttribute("style",`right:${350-posx}px;top:${450+posy}px`)
    document.getElementById('firebase_icon')?.setAttribute("style",`right:${750-posx}px;top:${150+posy}px`)

    // layer 2
    document.getElementById('html_icon')?.setAttribute("style",`left:${100+posx*0.5}px;top:${350+posy*0.5}px`)
    document.getElementById('js_icon')?.setAttribute("style",`left:${350+posx*0.5}px;top:${150+posy*0.5}px`)
    document.getElementById('python_icon')?.setAttribute("style",`left:${250+posx*0.5}px;top:${500+posy*0.5}px`)
    document.getElementById('css_icon')?.setAttribute("style",`right:${450-posx*0.5}px;top:${300+posy*0.5}px`)
    document.getElementById('mongodb_icon')?.setAttribute("style",`right:${550-posx*0.5}px;top:${100+posy*0.5}px`)
    document.getElementById('unity_icon')?.setAttribute("style",`right:${250-posx*0.5}px;top:${600+posy*0.5}px`)
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };}
  }, [setArrowPos]);

  

  return (
    <>
    <div className=' h-[100vh] w-screen text-cyan-50 '>
      <div className=' w-[100vw] h-[100vh] absolute' id="demo">
        <div id='js_icon' className={` w-16 h-16  absolute top-[100px] rounded-md shadow-2xl hover:shadow-yellow-400 shadow-yellow-700 hover:scale-110 transition`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD43B" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>  
        </div>
        <div id='react_icon' className={` w-16 h-16 rounded-md shadow-cyan-700 hover:shadow-cyan-600 shadow-2xl border-[0px] p-2 absolute top-[200px] hover:scale-110 transition`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
        </div>
        <div id='html_icon' className={` w-16 h-16 bg-red-500 pt-2 p-3 absolute top-[300px] rounded-md shadow-red-700 hover:shadow-red-500 shadow-2xl  hover:scale-110 transition`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        </div>
        <div id='java_icon' className={`w-16 h-16 pt-1 p-3 absolute top-[400px] rounded-md shadow-orange-700 hover:shadow-orange-500 shadow-2xl  hover:scale-110 transition`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffa200" d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0 -8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1 -21.1-12.8z"/></svg>
        </div>
        <div id='node_icon' className={`w-16 h-16 pt-3 p-1 absolute top-[500px] rounded-md shadow-green-700 hover:shadow-green-500 shadow-2xl  hover:scale-110 transition`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#63E6BE" d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>  
        </div>
        <div id='postgres_icon' className={`w-16 h-16 p-1 absolute top-[600px] rounded-md shadow-blue-700 hover:shadow-blue-500 shadow-2xl  hover:scale-110 transition`}>
          <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png" alt="" />
        </div>
        <div id='mongodb_icon' className={`w-16 h-16 p-0 absolute top-[700px] rounded-md shadow-green-700 hover:shadow-green-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="" />
        </div>
        <div id='firebase_icon' className={`w-16 h-16 p-0 absolute top-[800px] rounded-md shadow-yellow-700 hover:shadow-yellow-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="" />
        </div>
        <div id='unity_icon' className={`w-16 h-16 p-1 absolute top-[150px] rounded-md shadow-slate-700 hover:shadow-slate-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Unity.png" alt="" />
        </div>
        <div id='c++_icon' className={`w-16 h-16 p-1 absolute top-[250px] rounded-md shadow-slate-700 hover:shadow-slate-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
        </div>
        <div id='python_icon' className={`w-16 h-16 p-1 absolute top-[350px] rounded-md shadow-slate-700 hover:shadow-slate-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="" />
        </div>
        <div id='linux_icon' className={`w-16 h-16 p-1 absolute top-[450px] rounded-md shadow-slate-700 hover:shadow-slate-500 shadow-2xl  hover:scale-110 transition`}>
          <img  src="https://cdn-icons-png.flaticon.com/512/226/226772.png" alt="" />
        </div>
        <div id='css_icon' className={`w-16 h-16 p-3 pt-2 bg-blue-400 absolute top-[550px] rounded-md shadow-blue-700 hover:shadow-blue-500 shadow-2xl  hover:scale-110 transition`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
        </div>
      </div>
      
      
      <Image />
      <div className='absolute top-[50%] w-full h-2'>
        <p className='text-white text-center border-white border-2 w-[30%] mx-auto p-10'>Under Development</p>
      </div>

    </div>
    <div>
      <h1 className=' w-full -z-10 absolute bottom-0 md:text-7xl text-3xl lg:text-8xl font-bold text-center text-sky-50
      ' id='AboutMe'>Daylen McCarron</h1>
      <div className="w-[70rem] h-0 relative left-[30rem] -z-20">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 </div>
    </div>
  </>
  )
}

export default Display