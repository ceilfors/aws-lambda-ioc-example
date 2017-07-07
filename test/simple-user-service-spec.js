/* eslint-env mocha */

const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const sinon = require('sinon')
const expect = chai.expect

describe('user-service', () => {
  let userRepository, subject

  before(() => {
    userRepository = { find: sinon.stub() }
    subject = require('../src/simple-user-service')(userRepository)
  })

  it('should return "success" if a user is found in the database', () => {
    userRepository.find.returns({})
    const result = subject.login('user', 'secret')

    expect(result).to.equal('success')
  })

  it('should return "invalid credentials" if a user is not found in the database', () => {
    userRepository.find.returns(undefined)
    const result = subject.login('user', 'secret')

    expect(result).to.equal('invalid credentials')
  })
})
