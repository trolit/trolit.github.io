export function getYouTubeUrl(id: string, options?: { embed: boolean }) {
  const isEmbed = options?.embed;

  return new URL(`/${isEmbed ? 'embed/' : `watch?v=`}${id}`, 'https://www.youtube.com');
}
