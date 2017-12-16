import express from 'express'
import Send from '../helper/SendPush'

const router = express.Router()

/* GET index page. */
router.get('/', (req, res) => {
  Send()
  res.json({
    title: 'Express'
  })
})

export default router
