import express from 'express'
import { getMovies } from '../controllers/movies.js'

const router = express.Router()

router.get('/movies', getMovies)

export default router
