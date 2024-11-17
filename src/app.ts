import express, { NextFunction, Request, Response, } from 'express'
const app = express()
const port = 3000


// parsers 
app.use(express.json())
app.use(express.text())


const userRouter = express.Router()
const courseRouter = express.Router()

app.use('/api/v1/user', userRouter)
app.use('/api/v1/courses', courseRouter)

userRouter.get('/create-user', (req: Request, res: Response) => {
const user = req.body
console.log(user)

res.json ({
  success: true,
  message: "User is Created sucessfully",
  data: user
})

})


courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body
  console.log(course)

  res.json({
    success: true,
    message: "course created successfully",
    data: course,
  })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname)
  next()
}

app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello developer!!!')
})

// how to get params id 
// app.post('/:userId', (req: Request, res: Response) => {
//   console.log(req.params)
//   res.send({
//     message: "successfully received data"
//   })
// })

// how to find query 
app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.query)
  res.send({
    message: "successfully received data"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app