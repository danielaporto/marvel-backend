import sinon from 'sinon'
import axios from 'axios'

import * as settingsModule from '../../../settings'
import { getAllCharacters } from '../get-all-characters'

const characterFake = { id: 1, name: 'character-name' }
const dataFake = { results: [characterFake] }
const queryFake = { offset: 1, limit: 10 }
const responseMock = { results: [characterFake] }
const standardQueryParamsFake = 'ts=2020-09-21&apikey=aaaaa&hash=a114714f78d89017f768fc2ad7c70bf8'

const MARVEL_API_HOST = 'http://test:0000'
const TIMEOUT_DEFAULT = 2000
const MARVEL_PUBLIC_KEY = 'aaaaa'
const MARVEL_PRIVATE_KEY = 'bbbbb'

describe('src/domain-services/characters/get-all-characters.js', () => {
  describe('getAllCharacters', () => {
    describe('when it\'s called', () => {
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
          getAllCharacters(queryFake)
            .then(() => {
              expect(axios.get).to.have.calledOnceWith(
                `${MARVEL_API_HOST}/characters?${standardQueryParamsFake}&offset=1&limit=10`,
                { timeout: TIMEOUT_DEFAULT }
              )
            }))

        it('should return an object with an character list', () =>
          getAllCharacters(queryFake)
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
          getAllCharacters({})
            .then(() => {
              expect(axios.get).to.have.calledOnceWith(
                `${MARVEL_API_HOST}/characters?${standardQueryParamsFake}`,
                { timeout: TIMEOUT_DEFAULT }
              )
            }))

        it('should return an object with an character list', () =>
          getAllCharacters({})
            .then((data) => expect(data).to.be.eql(responseMock)))
      })
    })
  })
})
