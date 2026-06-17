/**
 * Returns the correct URL for a public asset, respecting the Vite base path.
 * Use this for any asset reference in data files that should work in both
 * dev and production (including subdirectory deployments).
 */
export function assetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Remove leading slash so we can join cleanly
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${clean}`;
}
