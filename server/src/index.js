import express from 'express'
import mongoose from 'mongoose'
import {router} from "./routers/router.js"
import config from "./config/config.json" assert { type: 'json' }
import cors from "./middleware/cors.middleware.js";

const DB_URL = 'mongodb+srv://user:user@cluster0.sfq7ugr.mongodb.net/?retryWrites=true&w=majority'
const PORT = config.PORT

const app = express()
app.use(cors)
app.use(express.json())
app.use('/api', router)

// GET
app.get('/', (req, res) => {
  res.status(200).json('nice gj')
})

const startApp = async () => {
  try {
    await mongoose.connect(
      DB_URL,
      {useUnifiedTopology: true, useNewUrlParser: true}
    )
    app.listen(PORT, () => {
      console.log('app init')
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()