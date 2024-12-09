import express from 'express'
import { createTicket, getTicketById } from '../controllers/ticket.js'

const router = express.Router()

router.get('/ticket', getTicketById)

router.post('/ticket', createTicket)

export default router
