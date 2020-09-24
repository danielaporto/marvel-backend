import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_PAGINATION
} from '../settings'

export const queryParser = ({
  name,
  nameStartsWith,
  modifiedSince,
  comics,
  series,
  events,
  orderBy,
  limit,
  offset
}) => ({
  ...name && { name },
  ...nameStartsWith && { nameStartsWith },
  ...modifiedSince && { modifiedSince },
  ...comics && { comics },
  ...series && { series },
  ...events && { events },
  offset: parseInt(offset, 10) || DEFAULT_FIRST_PAGE,
  limit: parseInt(limit, 10) || DEFAULT_PAGINATION,
  ...orderBy && { orderBy }
})
