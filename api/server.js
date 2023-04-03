const express = require('express')
const port = 8080
const app = express(); // This app starts a server and listens on port 3000 for connections


app.get('/', (req, res) => {
  res.send('Api is live on  8080!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 