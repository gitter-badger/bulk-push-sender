/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:35:21
 * @modify date 2017-12-17 12:35:21
 * @desc produce.js
*/

import express from 'express'
import Produce from '../rabbitMQ/Producer'
import Faker from 'faker'

const router = express.Router()
let queueName = 'push.setrowid.com:bildirim_gonderim_test'
/* GET index page. */
router.get('/', (req, res) => {
  Produce(JSON.stringify(Faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}')))
  res.send('OK')
})

export default router
