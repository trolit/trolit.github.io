import { GITHUB_NAME } from '@/data/user';

export function getGitHubUrl(repository?: string, username?: string) {
  const REPOSITORY = repository ? `/${repository}` : '';

  return new URL(`/${username || GITHUB_NAME}${REPOSITORY}`, 'https://github.com');
}
