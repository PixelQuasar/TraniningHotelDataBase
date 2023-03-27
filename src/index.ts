import app from './App'
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT, () => {
  return console.log(`server is listening on ${process.env.PORT}`)
})
