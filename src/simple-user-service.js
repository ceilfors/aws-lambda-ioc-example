const assert = require('assert')

module.exports = (userRepository) => {
  assert(userRepository, 'userRepository is required')
  return {
    login: (username, password) => {
      return userRepository.find(username, password)
        .then(user => user ? 'success' : 'invalid credentials')
    }
  }
}
