import sinon from 'sinon'

import * as settingsModule from '../../settings'
import { buildQueryString } from '../build-query-string'

const queryFake = {
  offset: 1,
  limit: 10
}

const MARVEL_PUBLIC_KEY = 'aaaaa'
const MARVEL_PRIVATE_KEY = 'bbbbb'

describe('src/data-sources/build-query-string.js', () => {
  describe('buildQueryString', () => {
    describe('when it\'s called', () => {
      const sandbox = sinon.createSandbox()

      before(() => {
        sandbox.stub(settingsModule, 'MARVEL_PUBLIC_KEY').value(MARVEL_PUBLIC_KEY)
        sandbox.stub(settingsModule, 'MARVEL_PRIVATE_KEY').value(MARVEL_PRIVATE_KEY)
      })

      after(() => {
        sandbox.restore()
      })

      describe('without filter attributes', () => {
        it('should return query parameters considering standard attributes', () => {
          expect(buildQueryString({}))
            .to.be.eql('ts=2020-09-21&apikey=aaaaa&hash=a114714f78d89017f768fc2ad7c70bf8')
        })
      })

      describe('with filter attributes', () => {
        it('should return query parameters considering the offset and limit attributes', () => {
          expect(buildQueryString(queryFake))
            .to.be.eql('ts=2020-09-21&apikey=aaaaa&hash=a114714f78d89017f768fc2ad7c70bf8&offset=1&limit=10')
        })
      })
    })
  })
})
