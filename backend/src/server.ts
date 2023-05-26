import express from 'express'
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello 12121212')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})