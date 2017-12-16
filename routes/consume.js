/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:17:38
 * @modify date 2017-12-17 12:17:38
 * @desc consume.js
*/

import express from 'express'
import Consume from '../rabbitMQ/Consumer'

const router = express.Router()

let queueName = 'push.setrowid.com:bildirim_gonderim_test'
/* GET index page. */
router.get('/', (req, res) => {
  Consume(queueName)
})

export default router
