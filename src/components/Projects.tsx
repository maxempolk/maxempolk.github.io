import ProjectItem from './ProjectItem'
import { useTranslation } from 'react-i18next'
import { projectsContent } from '../content/portfolio'

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('projects_section_title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsContent.projects.map((project) => (
                <ProjectItem key={project.title} project={project} />
            ))}
        </div>
    </div>
</section>
  )
}

export default Projects