const db = {
  'user': 'secret'
}

module.exports = () => {
  return {
    find: (username, password) => db[username] === password
  }
}
