const deps = module.exports.deps = {}
deps.userRepository = require('./user-repository')()
deps.userService = require('./user-service')(deps.userRepository)

module.exports.handler = (event, callback) => {
  const {userService} = deps
  const result = userService.login(event.username, event.password)
  const callbackResult = result === 'success' ? 200 : 404
  callback(null, callbackResult)
}
