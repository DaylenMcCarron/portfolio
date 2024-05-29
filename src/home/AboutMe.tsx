

const AboutMe = () => {
  return (<>
    <div className='w-screen h-[80vh] bg-[#ffffff09]'>
      <div className='flex  w-[100%] h-[100%] '>
        
        <div className=' basis-2/3'>
          <div className='mx-24 h-[60%] my-24'>
            <h1 className=' text-3xl p-6 pt-1 font-semibold text-sky-50'>About Me:</h1>
            <p className=' text-lg pt-3 text-sky-50'>
            I recently completed my BCA and am now eager to start my professional journey. My passion for programming began with game creation, using no-code engines like Stencyl and then progressing to Unity, which sparked my interest in coding.
            <br/><br/>During my BCA, I delved into web development, mastering HTML, CSS, and JavaScript, and exploring frameworks like React, as well as backend services such as Firebase and MongoDB. My coursework also included languages like C, C++, Python, and Java, with a focus on Java EE technologies like JSP and JDBC.
            <br/><br/>I expanded my database skills with MySQL, PL/SQL, and PostgreSQL, and independently studied Responsive Web Design. For my final project, I developed a quick commerce platform using Flutter. I'm excited to bring my skills and passion to a dynamic team.
            </p>
          </div>
        </div>
        <div className=' bg-slate-600 w-[1px]'></div>
        <div className=' basis-1/3 '>
          <div className='group relative mx-24  h-[40%] my-12 border-[1px]'>
            <img className=' h-full w-full object-cover' src="/assets/nasa.jpeg" alt="" />
            <div className='absolute top-0 right-0 opacity-0 hover:opacity-40 bg-black w-full h-full'></div>
            <h1 className='absolute invisible group-hover:visible bottom-1 left-2 text-white'>Hackathon 1</h1>
          </div>
          <div className='group relative mx-24  h-[40%] my-12 border-[1px]'>
            <img className=' h-full w-full object-cover' src="/assets/knowcode.jpg" alt="" />
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