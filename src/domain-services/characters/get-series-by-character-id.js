import { fetchesListsOfSeriesFilteredByACharacterId } from '../../data-sources'

export const getSeriesByCharacterId = async (characterId) =>
  fetchesListsOfSeriesFilteredByACharacterId(characterId)
    .then(({ data }) => data)
