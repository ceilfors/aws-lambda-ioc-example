const db = {
  'user': 'secret'
}

module.exports = () => {
  return {
    find: (username, password) => Promise.resolve(db[username] === password ? db[username] : null)
  }
}
