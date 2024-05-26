
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-[90vh] w-[100vw]'><h1 className='text-center text-6xl text-sky-200 sixtyfour py-2 shadow-white pt-12'>Projects</h1>
     <div className='flex w-full h-full align-middle justify-center pt-8'>
     <ProjectCard />
     <img className='fixed -z-10 bottom-0' src="https://www.freepnglogos.com/uploads/mountain-png/mountain-png-uplyft-creative-branding-design-development-fort-33.png" alt="" />
     </div>
     </div>
  )
}

export default Projects