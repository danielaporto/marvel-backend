import { queryParser } from '../query-parser'

const queryParamsFake = {
  name: 'test',
  nameStartsWith: 'hhhh',
  modifiedSince: '2020-09-21T15:00:00-03:00',
  comics: 'ccc',
  series: 'bbb',
  events: 'aaaa',
  orderBy: 'name'
}
const queryParamsMock = {
  name: 'test',
  nameStartsWith: 'hhhh',
  modifiedSince: '2020-09-21T15:00:00-03:00',
  comics: 'ccc',
  series: 'bbb',
  events: 'aaaa',
  orderBy: 'name',
  offset: 0,
  limit: 9
}

describe('src/utils/query-parser.js', () => {
  describe('queryParser', () => {
    describe('when it\'s called', () => {
      describe('with valid attributes', () => {
        it('should return an object with the name, offset and limit attributes', () => {
          expect(queryParser(queryParamsFake))
            .to.be.eql(queryParamsMock)
        })
      })

      describe('with invalid attributes', () => {
        it('should return an object with the offset and limit attributes', () => {
          expect(queryParser({ test: 'test' })).to.be.eql({ offset: 0, limit: 9 })
        })
      })
    })
  })
})
