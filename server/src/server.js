import express from 'express'

const app = express()
const port = 8080

app.get('/api/message', (req, res) => {
  res.send('Hello from server!');
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

