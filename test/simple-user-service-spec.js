/* eslint-env mocha */

const sinon = require('sinon')
const chaiAsPromised = require('chai-as-promised')
const chai = require('chai')
chai.use(chaiAsPromised)
const expect = chai.expect

describe('user-service', () => {
  let userRepository, subject

  before(() => {
    userRepository = { find: sinon.stub() }
    subject = require('../src/simple-user-service')(userRepository)
  })

  it('should return "success" if a user is found in the database', () => {
    userRepository.find.returns(Promise.resolve({}))
    const result = subject.login('user', 'secret')
    return expect(result).to.eventually.equal('success')
  })

  it('should return "invalid credentials" if a user is not found in the database', () => {
    userRepository.find.returns(Promise.resolve(null))
    const result = subject.login('user', 'secret')
    return expect(result).to.eventually.equal('invalid credentials')
  })
})
