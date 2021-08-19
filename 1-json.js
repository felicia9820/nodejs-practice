const fs = require('fs')

// const book = {
//     title: 'The Great Gatsby',
//     author: 'Fitzgerald'
// }

// const bookJSON = JSON.stringify(book)

// const parsedData = JSON.parse(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const databuffer = fs.readFileSync('1-json.json')
// const dataJSON = databuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)

data.title = "New title"
data.author = "New author"

const newJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSON) 