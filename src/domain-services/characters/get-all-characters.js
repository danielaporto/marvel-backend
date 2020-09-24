import { fetchesListsOfCharacters } from '../../data-sources'

export const getAllCharacters = async (query) =>
  fetchesListsOfCharacters(query)
    .then(({ data }) => data)
