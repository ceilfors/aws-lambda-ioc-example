module.exports = () => ({
  login: (username, password) => {
    return username === 'user' && password === 'secret'
  }
})
