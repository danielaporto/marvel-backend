import qs from 'qs'
import dateformat from 'dateformat'
import md5 from 'md5'

import {
  MARVEL_PUBLIC_KEY,
  MARVEL_PRIVATE_KEY
} from '../settings'

const getCurrentDate = () =>
  dateformat(new Date(), 'isoDate')

export const buildQueryString = (query) => {
  const currentDate = getCurrentDate()

  return qs.stringify({
    ts: currentDate,
    apikey: MARVEL_PUBLIC_KEY,
    hash: md5(`${currentDate}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`),
    ...query
  })
}
