const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static('assets'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})