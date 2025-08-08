import type { IProject } from "../content/portfolioTypes"

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors">
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors">
          <div className="h-48 bg-gray-800 flex items-center justify-center">
            {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <span className="text-4xl">🛒</span>}
          </div>
          <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-800 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
              </div>
              <div className="flex gap-4">
                  <a href={project.demoLink} className="text-accent hover:underline">Live Demo</a>
                  <a href={project.codeLink} className="text-accent hover:underline">GitHub</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectItem