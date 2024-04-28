export const BASE_ROUTE = '/';

// ---

export const HOME_ROUTE_NAME = 'Home';

export const HOME_ROUTE = BASE_ROUTE;

// ---

export const PROJECTS_ROUTE_NAME = 'Projects';

export const PROJECTS_PROJECT_NAME_SLUG = 'projectName';

export const PROJECTS_ROUTE = BASE_ROUTE.concat(PROJECTS_ROUTE_NAME.toLowerCase());

// ---

export const POSTS_ROUTE_NAME = 'Posts';

export const POSTS_POST_NAME_SLUG = 'postName';

export const POSTS_ROUTE = BASE_ROUTE.concat(POSTS_ROUTE_NAME.toLowerCase());

// ---

export const SOUNDTRACKS_ROUTE_NAME = 'Soundtracks';

export const SOUNDTRACKS_ROUTE = BASE_ROUTE.concat(SOUNDTRACKS_ROUTE_NAME.toLowerCase().replace(' ', '-'));
