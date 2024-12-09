import db from '../util/db.js'

export const createTicket = async (req, res) => {
  const { clientName, movie, seats, schedule } = req.body
  const formattedDate = schedule.replace('T', ' ').replace('.000Z', ' ')

  // console.log(formattedDate) // Salida: "YYYY-MM-DD HH:MM:SS"

  let purchase
  await db
    .execute(
      `INSERT INTO purchase(client_name, movie, seats, schedule) VALUES("${clientName}", "${movie}", "${seats}", "${formattedDate}" )`,
    )
    .then(async (result) => {
      const purchaseId = result[0].insertId
      await db
        .execute(`SELECT * FROM purchase WHERE purchase_id = ${purchaseId}`)
        .then((purchaseDB) => {
          purchase = purchaseDB[0]
        })
      // console.log('Se guardo la compra en la DB.')
    })

  // console.log(purchase)

  return res.status(200).json({ message: 'Compra exitosa.', result: purchase })
}

export const getTicketById = async (req, res) => {
  const { purchaseId } = req.body

  let purchase
  await db
    .execute(`SELECT * FROM purchase WHERE purchase_id = ${purchaseId}`)
    .then((purchaseDB) => {
      purchase = purchaseDB[0][0]
    })
  return res.status(200).json({ message: 'Ticket from DB.', ticket: purchase })
}
