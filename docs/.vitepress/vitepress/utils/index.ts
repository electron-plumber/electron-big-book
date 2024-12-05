import type { Route } from 'vitepress'

const hashRE = /#.*$/, extRE = /(index)?\.(md|html)$/;

export function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}

export * from './colors'

export function isActive(route, path) {
  if (path === undefined) {
    return false;
  }
  const routePath = normalize(`/${route.data.relativePath}`);
  const pagePath = normalize(path);
  return routePath === pagePath;
}

export function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}

export function removeExtention(path) {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/';
}

export const isArray = Array.isArray

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export const throttleAndDebounce = (fn: () => any, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}

// When match === true, meaning `path` is a string for build regex
export const isActiveLink = (
  route: Route,
  pathPattern: string,
  match?: boolean
) => {
  if (!match) return isActive(route, pathPattern)
  const regex = new RegExp(pathPattern)

  return regex.test(normalize(`/${route.data.relativePath}`))
}
