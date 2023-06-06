import express from 'express'
import { sum } from './utils'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data: any = null
  const result = sum(data)
  console.log(result)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
