/* eslint-env mocha */

var chai = require('chai')
var sinonChai = require('sinon-chai')
chai.should()
chai.use(sinonChai)
const sinon = require('sinon')
const {deps, handler} = require('../src/lambda')

describe('lambda', () => {
  it('returns "200" if a user credentials is valid', () => {
    deps.userService = ({
      login: () => 'success'
    })
    const callback = sinon.spy()
    handler({username: 'any', password: 'any'}, callback)

    callback.should.have.been.calledWith(null, 200)
  })

  it('returns "404" if a user credentials is invalid', () => {
    deps.userService = ({
      login: () => 'invalid'
    })
    const callback = sinon.spy()
    handler({username: 'any', password: 'any'}, callback)

    callback.should.have.been.calledWith(null, 404)
  })
})
