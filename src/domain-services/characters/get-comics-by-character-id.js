import { fetchesListsOfComicsFilteredByACharacterId } from '../../data-sources'

export const getComicsByCharacterId = async (characterId) =>
  fetchesListsOfComicsFilteredByACharacterId(characterId)
    .then(({ data }) => data)
