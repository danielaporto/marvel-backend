import { throwError } from '../throw-error'

describe('src/error-handler/throw-error.js', () => {
  describe('throwError', () => {
    describe('when it\'s called', () => {
      describe('and specify the status and code attributes', () => {
        it('should return an object considering the status and code attributes passed', () => {
          expect(throwError({ code: 100, status: 'test' }))
            .to.be.eql({ code: 100, status: 'test' })
        })
      })

      describe('and does not specify status and code attributes', () => {
        it('should return an object considering the standard attributes', () => {
          expect(throwError({}))
            .to.be.eql({ code: 500, status: 'Internal Server Error' })
        })
      })
    })
  })
})
