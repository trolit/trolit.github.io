import { Project } from '@/components/Project';
import { Layout } from '@/components/common/Layout';
import { SORTED_PROJECTS } from '@/data/projects';

export function Projects() {
  return (
    <Layout>
      <div className='gap-4 columns-1 lg:columns-2'>
        {SORTED_PROJECTS.map((project, index) => {
          return (
            <div key={`project-${index}`} className='mt-5'>
              <Project value={project} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
