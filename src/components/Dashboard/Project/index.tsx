import { ScrollArea, Stack } from '@mantine/core';
import { Navigate, useParams } from 'react-router-dom';

import { PROJECTS } from '@/assets/data/projects';
import { PROJECTS_ROUTE } from '@/assets/constants/routes';
import { usePostStyles } from '@/assets/styles/dashboard/post';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { useContentRenderer } from '@/services/useContentRenderer';
import { PROJECTS_PROJECT_NAME_SLUG } from '@/assets/constants/routes';
import { IBaseContent } from '@/services/useContentRenderer/interfaces';

export function Project() {
  type ExpectedParams = {
    [PROJECTS_PROJECT_NAME_SLUG]: string;
  };

  const { wrapper } = usePostStyles();

  const { scrollArea } = useDashboardStyles();

  const contentRenderer = useContentRenderer<IBaseContent>();

  const { projectName } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const projectIndex = PROJECTS.findIndex((project) => project.address.endsWith(projectName));

  if (~projectIndex) {
    const projectArticle = PROJECTS[projectIndex]?.article;

    if (projectArticle) {
      return (
        <ScrollArea className={scrollArea}>
          <Stack spacing='xl' align='center' className={wrapper}>
            {contentRenderer.render(projectArticle)}
          </Stack>
        </ScrollArea>
      );
    }
  }

  return <Navigate to={PROJECTS_ROUTE} replace={true} />;
}
