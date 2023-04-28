import app from './App'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

console.log(process.env.mongoURL)
mongoose.connect(process.env.mongoURL as string)

app.listen(process.env.PORT, () => {
  return console.log(`server is listening on ${process.env.PORT}`)
})



