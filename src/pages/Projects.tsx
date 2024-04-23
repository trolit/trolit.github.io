import PROJECTS from '@/data/projects';
import { IProject } from '@/types/IProject';
import { Project } from '@/components/Project';
import { sortByDate } from '@/helpers/sortByDate';
import { Layout } from '@/components/common/Layout';

export function Projects() {
  const sortedProjects: IProject[] = sortByDate<IProject>(PROJECTS);

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-5'>
        {sortedProjects.map((project, index) => {
          return (
            <div key={`project-${index}`} className={`col-span-12 ${project.wrapperClassName || 'sm:col-span-6'}`}>
              <Project value={project} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
