/* eslint-env mocha */

const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const sinon = require('sinon')
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
    userService.login.returns('success')
    subject({username: 'any', password: 'any'}, callback)

    expect(callback).to.have.been.calledWith(null, 200)
  })

  it('should return "404" if a user credentials is invalid', () => {
    userService.login.returns('invalid')
    subject({username: 'any', password: 'any'}, callback)

    expect(callback).to.have.been.calledWith(null, 404)
  })
})
