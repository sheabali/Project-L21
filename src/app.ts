import express, { Request, Response } from 'express'
const app = express()
const port = 3000


// parsers 
app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello developer!!!')
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send({
    message: "successfully received data"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app