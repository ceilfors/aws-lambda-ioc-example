/* eslint-env mocha */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
chai.use(sinonChai)
const expect = chai.expect

describe('login lambda', () => {
  let userService, subject, callback

  before(() => {
    let {deps, handler} = require('../src/login')
    subject = handler
    userService = deps.userService = { login: sinon.stub() }
    callback = sinon.spy()
  })

  it('should return "200" if a user credentials is valid', () => {
    userService.login.returns(Promise.resolve('success'))
    return subject({username: 'any', password: 'any'}, {}, callback).then(_ => {
      expect(callback).to.have.been.calledWith(null, 200)
    })
  })

  it('should return "404" if a user credentials is invalid', () => {
    userService.login.returns(Promise.resolve('invalid'))
    return subject({username: 'any', password: 'any'}, {}, callback).then(_ => {
      expect(callback).to.have.been.calledWith(null, 404)
    })
  })
})
