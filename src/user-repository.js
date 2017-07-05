const db = {
  'user': 'secret'
}

module.exports = (userRepository) => {
  return {
    find: (username, password) => db[username] === password
  }
}
