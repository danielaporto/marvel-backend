import sinon from 'sinon'
import axios from 'axios'

import * as settingsModule from '../../../settings'
import { getSeriesByCharacterId } from '../get-series-by-character-id'

const serieFake = { id: 1, title: 'title-name' }
const dataFake = { results: [serieFake] }
const responseMock = { results: [serieFake] }
const characterIdFake = 1234
const standardQueryParamsFake = 'ts=2020-09-21&apikey=aaaaa&hash=a114714f78d89017f768fc2ad7c70bf8'

const MARVEL_API_HOST = 'http://test:0000'
const TIMEOUT_DEFAULT = 2000
const MARVEL_PUBLIC_KEY = 'aaaaa'
const MARVEL_PRIVATE_KEY = 'bbbbb'

describe('src/domain-services/characters/get-series-by-character-id.js', () => {
  describe('getSeriesByCharacterId', () => {
    describe('when it\'s called', () => {
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
        getSeriesByCharacterId(characterIdFake)
          .then(() => {
            expect(axios.get).to.have.calledOnceWith(
              `${MARVEL_API_HOST}/characters/${characterIdFake}/series?${standardQueryParamsFake}`,
              { timeout: TIMEOUT_DEFAULT }
            )
          }))

      it('should return an object with a serie list', () =>
        getSeriesByCharacterId(characterIdFake)
          .then((data) => expect(data).to.be.eql(responseMock)))
    })
  })
})
