
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-fit w-[100vw]'><h1 className='text-center text-6xl text-sky-200 sixtyfour py-2 shadow-white pt-12' id='Projects'>Projects</h1>
     <div className='flex w-full h-fit  flex-col  pt-8'>
     <ProjectCard />
     <ProjectCard />
     <ProjectCard />
     <img className='fixed -z-10 bottom-0' src="https://www.freepnglogos.com/uploads/mountain-png/mountain-png-uplyft-creative-branding-design-development-fort-33.png" alt="" />
     </div>
     </div>
  )
}

export default Projects