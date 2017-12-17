/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:10:18
 * @modify date 2017-12-17 12:10:18
 * @desc Consumer.js
*/
import sendPush from '../helper/SendPush'
import lodash from 'lodash'

function ab2str (buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}
function str2ab (str) {
  var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
  var bufView = new Uint16Array(buf)
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

module.exports = function (queueName) {
  let countOfMessages
  const open = require('amqplib').connect(process.env.AMQP_URL)
  process.once('SIGINT', function () { conn.close() })
  open.then(conn => conn.createChannel()).then(ch => ch.assertQueue(queueName).then((ok) => {
    countOfMessages = ok.messageCount
    if (ok.messageCount === 0) {
      console.log('No messages to consume. Waiting for messages...')
    }
    return ch.consume(queueName, function (msg) {
      if (msg !== null) {
        let pushData = JSON.parse(ab2str(msg.content[0]))
        console.log(`Consuming message from Queue: ${queueName}`)
        for (let pushMessage = 0; pushMessage < pushData.length; pushMessage++) {
          console.log(pushData[pushMessage])
          sendPush(pushData[pushMessage])
          ch.ack(msg)
        }
      }
    })
  }))
  return true
}
