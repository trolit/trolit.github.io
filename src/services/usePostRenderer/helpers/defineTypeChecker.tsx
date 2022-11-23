export function defineTypeChecker<T>(data: unknown): data is T {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const keys = Object.keys(data);

  return keys.every((key: string) => key in data);
}
