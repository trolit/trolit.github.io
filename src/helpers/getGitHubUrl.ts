import { GITHUB_USERNAME } from '@/old/config';

export function getGitHubUrl(repository: string, username?: string) {
  return new URL(`/${username || GITHUB_USERNAME}/${repository}`, 'https://github.com');
}
