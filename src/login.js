const deps = module.exports.deps = {}
deps.userRepository = require('./hardcoded-user-repository')()
deps.userService = require('./simple-user-service')(deps.userRepository)

module.exports.handler = (event, callback) => {
  const {userService} = deps
  return userService.login(event.username, event.password)
    .then(result => callback(null, result === 'success' ? 200 : 404))
}
