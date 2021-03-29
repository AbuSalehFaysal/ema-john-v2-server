const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('EMA JOHN V2 SERVER')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})