/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:57:27
 * @modify date 2017-12-17 12:57:27
 * @desc [description]
*/
import webpush from 'web-push'

module.exports = function (registerInfo, payload) {
  webpush.setGCMAPIKey(process.env.API_KEY)
  const options = {
    vapidDetails: {
      subject: 'mailto:semih.onay@bilgiedu.net',
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
      pem: process.env.PEM
    },
    // 1 hour in seconds.
    TTL: 60 * 60
  }

  webpush.sendNotification(
    registerInfo,
    JSON.stringify(payload),
    options
  )
    .then((resp) => {
      console.log(resp)
    })
    .catch((err) => {
      console.error(err)
    })
}
