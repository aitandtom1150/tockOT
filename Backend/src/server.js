// src/server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import otRoutes from './routes/ot.routes.js'
import otDetailRoutes from './routes/otDetail.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5500

app.use(cors())
app.use(express.json())


// log requests (debug)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// ใช้งาน route OT
app.use('/api/ot', otRoutes)
app.use('/api/ot', otDetailRoutes); // ใช้ path เดียวกัน แต่คนละ subroute
// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
