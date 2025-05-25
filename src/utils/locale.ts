export function getLocaleFromPath(pathname: string): { currentLocale: string; newLocale: string; newPath: string } {
  const segments = pathname.split('/')
  const currentLocale = segments[2] // 'fa' or 'en'
  const newLocale = currentLocale === 'fa' ? 'en' : 'fa'

  // Preserve the current path when switching languages
  segments[2] = newLocale
  const newPath = segments.join('/')

  return { currentLocale, newLocale, newPath }
}
