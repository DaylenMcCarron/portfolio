import React from 'react'

type Props = {}

const AboutMe = (props: Props) => {
  return (<>
    <div className='w-screen h-[80vh] bg-[#ffffff09]'>
      <div className='flex  w-[100%] h-[100%] '>
        
        <div className=' basis-2/3'>
          <div className='mx-24 h-[60%] my-24'>
            <h1 className=' text-3xl p-6 pt-1 font-semibold text-sky-50'>About Me:</h1>
            <p className=' text-lg pt-3 text-sky-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam doloremque dolor ipsam aperiam officiis quisquam dolorem autem, cupiditate distinctio atque. Totam, temporibus. Omnis beatae quidem earum? Dicta, nobis soluta.
            <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium quis doloribus labore rerum laudantium veritatis ratione laborum. Qui, in? Autem hic obcaecati alias ut enim in temporibus expedita suscipit!
            </p>
          </div>
        </div>
        <div className=' bg-slate-600 w-[1px]'></div>
        <div className=' basis-1/3 '>
          <div className='group relative mx-24  h-[40%] my-12 border-[1px]'>
            <img className=' h-full w-full object-cover' src="https://media.licdn.com/dms/image/C4D03AQHjhLez70VHoA/profile-displayphoto-shrink_400_400/0/1516891104354?e=2147483647&v=beta&t=Q3nJla_bOxXYWt5QPViPe1iYVID-Va-tq-antHRyGBQ" alt="" />
            <div className='absolute top-0 right-0 opacity-0 hover:opacity-40 bg-black w-full h-full'></div>
            <h1 className='absolute invisible group-hover:visible bottom-1 left-2 text-white'>Hackathon 1</h1>
          </div>
          <div className='group relative mx-24  h-[40%] my-12 border-[1px]'>
            <img className=' h-full w-full object-cover' src="https://media.licdn.com/dms/image/C4D03AQHjhLez70VHoA/profile-displayphoto-shrink_400_400/0/1516891104354?e=2147483647&v=beta&t=Q3nJla_bOxXYWt5QPViPe1iYVID-Va-tq-antHRyGBQ" alt="" />
            <div className='absolute top-0 right-0 opacity-0 hover:opacity-40 bg-black w-full h-full'></div>
            <h1 className='absolute invisible group-hover:visible bottom-1 left-2 text-white'>Hackathon 2</h1>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default AboutMe