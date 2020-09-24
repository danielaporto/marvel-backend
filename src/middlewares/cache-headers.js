import { CACHE_DEFAULT } from '../settings'

export const cacheHeaders = (expiration = CACHE_DEFAULT, directive = 'public') =>
  (req, res, next) => {
    res.set({ 'Cache-Control': `${directive}, max-age=${expiration}` })
    next()
  }
