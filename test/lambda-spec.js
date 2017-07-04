/* eslint-env mocha */

var chai = require('chai')
// var dirtyChai = require('dirty-chai')
var expect = chai.expect
// chai.use(dirtyChai)
var sinonChai = require('sinon-chai')
chai.should()
chai.use(sinonChai)
const sinon = require('sinon')
const {deps, handler} = require('../src/lambda')

describe('lambda', () => {
  it('returns "logged in" if a user credentials is valid', () => {
    deps.userService = ({
      login: () => true
    })
    const callback = sinon.spy()
    handler({username: 'any', password: 'any'}, callback)

    callback.should.have.been.calledWith(null, 'logged in')
  })

  it('returns "wrong password" if a user credentials is invalid', () => {
    deps.userService = ({
      login: () => false
    })
    const callback = sinon.spy()
    handler({username: 'any', password: 'any'}, callback)

    callback.should.have.been.calledWith(null, 'wrong password')
  })
})
