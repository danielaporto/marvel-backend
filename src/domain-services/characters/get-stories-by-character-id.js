import { fetchesListsOfStoriesFilteredByACharacterId } from '../../data-sources'

export const getStoriesByCharacterId = async (characterId) =>
  fetchesListsOfStoriesFilteredByACharacterId(characterId)
    .then(({ data }) => data)
