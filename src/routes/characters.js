import express from 'express'

import { cacheHeaders } from '../middlewares'
import { throwError } from '../error-handler'
import {
  getAllCharacters,
  getCharacterById,
  getComicsByCharacterId,
  getEventsByCharacterId,
  getSeriesByCharacterId,
  getStoriesByCharacterId
} from '../domain-services/characters'
import { queryParser } from '../utils'

const characters = express.Router()

characters.use(cacheHeaders(30, 'public'))

characters.get('/', async (req, res) => {
  const { query = {} } = req

  return getAllCharacters(queryParser(query))
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

characters.get('/:characterId', async (req, res) => {
  const { params: { characterId } } = req

  return getCharacterById(characterId)
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

characters.get('/:characterId/comics', async (req, res) => {
  const { params: { characterId } } = req

  return getComicsByCharacterId(characterId)
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

characters.get('/:characterId/events', async (req, res) => {
  const { params: { characterId } } = req

  return getEventsByCharacterId(characterId)
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

characters.get('/:characterId/series', async (req, res) => {
  const { params: { characterId } } = req

  return getSeriesByCharacterId(characterId)
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

characters.get('/:characterId/stories', async (req, res) => {
  const { params: { characterId } } = req

  return getStoriesByCharacterId(characterId)
    .then((data) => res.status(200).send(data))
    .catch(({ code, status }) =>
      res.status(code || 500).send(throwError({ code, status })))
})

export { characters }
