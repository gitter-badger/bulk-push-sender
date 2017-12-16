/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:32:55
 * @modify date 2017-12-17 12:32:55
 * @desc Producer.js
*/
const queue = 'push.setrowid.com:bildirim_gonderim_test'

module.exports = function (data) {
  const open = require('amqplib').connect(process.env.AMQP_URL)

  open.then(function (conn) {
    return conn.createChannel()
  }).then(function (ch) {
    return ch.assertQueue(queue).then(function (ok) {
      console.log(`Message sent to Queue: ${queue}`)
      return ch.sendToQueue(queue, Buffer.from(data))
    })
  }).catch(console.warn)
}
