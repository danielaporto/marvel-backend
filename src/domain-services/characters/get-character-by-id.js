import { fetchesASingleCharacterById } from '../../data-sources'

export const getCharacterById = async (characterId) =>
  fetchesASingleCharacterById(characterId)
    .then(({ data }) => data)
