import { BASE_ROUTE } from '@/assets/constants/routes';

export function translateStringToAddress(value: string, route: string = BASE_ROUTE) {
  const valueWithoutSpecialCharacters = removeSpecialCharacters(value);

  return route.concat(
    route.endsWith('/') ? '' : '/',
    replacesSpacesWithKeyword(valueWithoutSpecialCharacters).toLowerCase(),
  );
}

function replacesSpacesWithKeyword(value: string, keyword = '-') {
  return value.replace(/ +/g, keyword);
}

function removeSpecialCharacters(value: string) {
  return value.replace(/[^a-zA-Z0-9 ]/g, '');
}
