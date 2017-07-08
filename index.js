require('./src/login').handler({username: 'user', password: 'secret'}, {}, (_, result) => {
  console.log(result)
})
