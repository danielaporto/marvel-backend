import { fetchesListsOfEventsFilteredByACharacterId } from '../../data-sources'

export const getEventsByCharacterId = async (characterId) =>
  fetchesListsOfEventsFilteredByACharacterId(characterId)
    .then(({ data }) => data)
