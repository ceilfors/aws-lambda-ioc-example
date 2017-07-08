# AWS Lambda IOC Example

## Files
### [test/login-spec.js](test/login-spec.js)

It is tricky to inject a dependency to a AWS Lambda Function handler as the function contract is predefined by AWS. This file shows how a dependency is being injected to a Lambda by putting all of the Lambda's dependencies into a singleton object. The DI solution that has been taken here doesn't involve usage of any IOC libraries.

### [test/simple-user-service-spec.js](test/simple-user-service-spec.js)

This file shows how a dependency can be injected to a module via a higher order function. No library is used too.

## Running the code

1. `npm i`
2. To run test: `npm t`
3. To run code: `node index`
