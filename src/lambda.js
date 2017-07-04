module.exports.deps = deps = {
  userService: require('./user-service')()
}

module.exports.handler = (event, callback) => {
  const {userService} = deps
  const result = userService.login(event.username, event.password)
  if (result) {
    callback(null, 'logged in')
  } else {
    callback(null, 'wrong password')
  }
}
