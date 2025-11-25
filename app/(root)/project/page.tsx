import Image from "next/image"
import data from "@/db/data"
import Link from "next/link"

const Project = () => {
  return (
    <section className="py-8 px-4">
      <h3 className="text-2xl font-bold text-white mb-6">Here are some of my projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projet?.map((project, index) => (
          <div 
            key={index} 
            className="bg-[--tabs-bg] p-6 text-white rounded-xl flex flex-col items-start w-full hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-[200px] flex items-center justify-center mb-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg">
              <span className="text-5xl font-bold text-white">
                {project?.title?.substring(0, 2).toUpperCase()}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-2">{project?.title}</h2>
            
            <p className="text-sm mb-4 text-gray-300 flex-grow">
              {project?.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project?.techno?.map((tech, i) => (
                <span
                  key={i}
                  className="py-1 px-3 text-xs rounded-full border border-[--skills-border] bg-[--skills-bg] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <Link href={project?.code || "#"} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/images/github.png"
                  height={30}
                  width={30}
                  alt="Github repo"
                  className="hover:scale-110 transition-transform"
                />
              </Link>
              
              {project?.prod && (
                <Link href={project.prod} target="_blank" rel="noopener noreferrer">
                  <span className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors">
                    Live Demo
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default Project