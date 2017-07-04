require('./src/lambda').handler({username: 'user', password: 'secret'}, (_, result) => {
  console.log(result)
})
