import axios from 'axios'

import {
  TIMEOUT_DEFAULT,
  MARVEL_API_HOST
} from '../settings'

import { buildQueryString } from './build-query-string'

export const fetchesListsOfEventsFilteredByACharacterId = (characterId) =>
  axios
    .get(`${MARVEL_API_HOST}/characters/${characterId}/events?${buildQueryString({})}`, {
      timeout: TIMEOUT_DEFAULT
    })
    .then((data) => data)
    .catch(({ response: { data } }) => Promise.reject(data))
