import { Project } from '@/components/Project';
import { Layout } from '@/components/common/Layout';
import { SORTED_PROJECTS } from '@/data/projects';

export function Projects() {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-5'>
        {SORTED_PROJECTS.map((project, index) => {
          return (
            <div key={`project-${index}`} className='col-span-12 lg:col-span-6'>
              <Project value={project} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
