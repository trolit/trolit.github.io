import { BASE_ROUTE } from '@/assets/constants/routes';

export function translateStringToAddress(value: string, route: string = BASE_ROUTE) {
  const rawValue = removeSpecialCharacters(value);

  return route.concat(route.endsWith('/') ? '' : '/', replaceSpacesWithKeyword(rawValue).toLowerCase());
}

function replaceSpacesWithKeyword(value: string, keyword = '-') {
  return value.replace(/ +/g, keyword);
}

function removeSpecialCharacters(value: string) {
  return value.replace(/[^a-zA-Z0-9 ]/g, '');
}
