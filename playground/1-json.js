const fs = require('fs')

const dataBuffer = fs.readFileSync('1-hason.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

//Overwrite data
data.name = 'Bubbles'
data.planet = 'Dogs'
data.age = 10
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-hason.json', userJSON)

console.log(data.name)
console.log(data.planet)
console.log(data.age)