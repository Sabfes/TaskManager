import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js";
import {router} from "./router.js";

const DB_URL = 'mongodb+srv://user:user@cluster0.sfq7ugr.mongodb.net/?retryWrites=true&w=majority'
const PORT = 5222

const app = express()
app.use(express.json())
app.use('api', router)

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