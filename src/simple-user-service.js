const assert = require('assert')

module.exports = (userRepository) => {
  assert(userRepository, 'userRepository is required')
  return {
    login: (username, password) => {
      const user = userRepository.find(username, password)
      return user ? 'success' : 'invalid credentials'
    }
  }
}
