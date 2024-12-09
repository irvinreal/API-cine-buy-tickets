import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import movieRoutes from './routes/movies.js'
import ticketRoutes from './routes/ticket.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())

app.use('/api', movieRoutes)
app.use('/api', ticketRoutes)

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`)
})
