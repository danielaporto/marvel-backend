import sinon from 'sinon'
import axios from 'axios'

import * as settingsModule from '../../settings'
import { fetchesListsOfCharacters } from '../fetches-lists-of-characters'

const characterFake = { id: 1, name: 'character-name' }
const dataFake = { results: [characterFake] }
const responseMock = { data: { results: [characterFake] } }
const standardQueryParamsFake = 'ts=2020-09-21&apikey=aaaaa&hash=a114714f78d89017f768fc2ad7c70bf8'
const queryFake = { offset: 1, limit: 10 }

const MARVEL_API_HOST = 'http://test:0000'
const TIMEOUT_DEFAULT = 2000
const MARVEL_PUBLIC_KEY = 'aaaaa'
const MARVEL_PRIVATE_KEY = 'bbbbb'

describe('src/data-sources/fetches-lists-of-characters.js', () => {
  describe('fetchesListsOfCharacters', () => {
    describe('when it\'s called', () => {
      describe('and the \'Marvel API\' returns an error', () => {
        const sandbox = sinon.createSandbox()
        let data

        before(async () => {
          sandbox.stub(axios, 'get').returns(
            Promise.reject({
              response: { data: { code: '000', status: 'test' } }
            })
          )

          data = await fetchesListsOfCharacters({}).catch((error) => error)
        })

        after(() => {
          sandbox.restore()
        })

        it('should return an object with the code and status attributes', () =>
          expect(data).to.be.eql({
            code: '000', status: 'test'
          }))
      })

      describe('with filter attributes', () => {
        const sandbox = sinon.createSandbox()

        before(() => {
          sandbox.stub(settingsModule, 'MARVEL_PUBLIC_KEY').value(MARVEL_PUBLIC_KEY)
          sandbox.stub(settingsModule, 'MARVEL_PRIVATE_KEY').value(MARVEL_PRIVATE_KEY)
          sandbox.stub(settingsModule, 'MARVEL_API_HOST').value(MARVEL_API_HOST)
          sandbox.stub(settingsModule, 'TIMEOUT_DEFAULT').value(TIMEOUT_DEFAULT)
          sandbox.stub(axios, 'get').returns(Promise.resolve({ data: dataFake }))
        })

        after(() => {
          sandbox.restore()
        })

        it('the \'axios.get\' should be called considering the offset and limit attributes', () =>
          fetchesListsOfCharacters(queryFake)
            .then(() => {
              expect(axios.get).to.have.calledOnceWith(
                `${MARVEL_API_HOST}/characters?${standardQueryParamsFake}&offset=1&limit=10`,
                { timeout: TIMEOUT_DEFAULT }
              )
            }))

        it('should return an object with an character list', () =>
          fetchesListsOfCharacters(queryFake)
            .then((data) => expect(data).to.be.eql(responseMock)))
      })

      describe('without filter attributes', () => {
        const sandbox = sinon.createSandbox()

        before(() => {
          sandbox.stub(settingsModule, 'MARVEL_PUBLIC_KEY').value(MARVEL_PUBLIC_KEY)
          sandbox.stub(settingsModule, 'MARVEL_PRIVATE_KEY').value(MARVEL_PRIVATE_KEY)
          sandbox.stub(settingsModule, 'MARVEL_API_HOST').value(MARVEL_API_HOST)
          sandbox.stub(settingsModule, 'TIMEOUT_DEFAULT').value(TIMEOUT_DEFAULT)
          sandbox.stub(axios, 'get').returns(Promise.resolve({ data: dataFake }))
        })

        after(() => {
          sandbox.restore()
        })

        it('the \'axios.get\' should be called considering the standard attributes', () =>
          fetchesListsOfCharacters({})
            .then(() => {
              expect(axios.get).to.have.calledOnceWith(
                `${MARVEL_API_HOST}/characters?${standardQueryParamsFake}`,
                { timeout: TIMEOUT_DEFAULT }
              )
            }))

        it('should return an object with an character list', () =>
          fetchesListsOfCharacters({})
            .then((data) => expect(data).to.be.eql({ data: dataFake })))
      })
    })
  })
})
