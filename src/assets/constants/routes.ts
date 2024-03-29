export const BASE_ROUTE = '/';

// Home
export const HOME_ROUTE_NAME = 'Home';

export const HOME_ROUTE = BASE_ROUTE;

// Projects

export const PROJECTS_ROUTE_NAME = 'Projects';

export const PROJECTS_PROJECT_NAME_SLUG = 'projectName';

export const PROJECTS_ROUTE = BASE_ROUTE.concat(PROJECTS_ROUTE_NAME.toLowerCase());

// Post(s)

export const POSTS_ROUTE_NAME = 'Posts';

export const POSTS_POST_NAME_SLUG = 'postName';

export const POSTS_ROUTE = BASE_ROUTE.concat(POSTS_ROUTE_NAME.toLowerCase());

// Tracks

export const TRACKS_ROUTE_NAME = 'Music Corner';

export const TRACKS_ROUTE = BASE_ROUTE.concat(TRACKS_ROUTE_NAME.toLowerCase().replace(' ', '-'));
