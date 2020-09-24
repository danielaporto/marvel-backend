export const {
  PORT = 3000,
  MARVEL_PUBLIC_KEY,
  MARVEL_PRIVATE_KEY,
  MARVEL_API_HOST = 'https://gateway.marvel.com/v1/public',
  TIMEOUT_DEFAULT = 3000,
  CACHE_DEFAULT = 300,
  DEFAULT_FIRST_PAGE = 0,
  DEFAULT_PAGINATION = 9
} = process.env
