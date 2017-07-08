const deps = module.exports.deps = {}
deps.userService = require('./simple-user-service')(
  require('./hardcoded-user-repository')()
)

module.exports.handler = (event, context, callback) => {
  const {userService} = deps
  return userService.login(event.username, event.password)
    .then(result => callback(null, result === 'success' ? 200 : 404))
}
