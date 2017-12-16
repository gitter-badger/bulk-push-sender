/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:10:18
 * @modify date 2017-12-17 12:10:18
 * @desc Consumer.js
*/

module.exports = function (queueName) {
  const open = require('amqplib').connect(process.env.AMQP_URL)
  open.then(conn => conn.createChannel()).then(ch => ch.assertQueue(queueName).then((ok) => {
    process.once('SIGINT', function () { conn.close() })
    if (ok.messageCount === 0) {
      console.log('No messages to consume. Waiting for messages...')
    }
    return ch.consume(queueName, function (msg) {
      if (msg !== null) {
        console.log(`Consuming message from Queue: ${queueName}`)
        ch.ack(msg, function (param) { console.log('DONE', param) })
      }
    })
  })).catch(console.warn('Some issues here...'))
}
