const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('laura@gmail.com'))
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'))
