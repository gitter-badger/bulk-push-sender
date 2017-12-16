/**
 * @author Semih Onay
 * @email semionay@gmail.com
 * @create date 2017-12-17 12:57:27
 * @modify date 2017-12-17 12:57:27
 * @desc [description]
*/
import webpush from 'web-push'

module.exports = function () {
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

  const registrationInfo = {
    endpoint: 'https://android.googleapis.com/gcm/send/dodh4dl5-DI:APA91bHhQr2CzsXRIls7W5NHzG7ajqqXAEn1gDuHLWYjQUplY-Sx8Wtn434YzYeE2EcuxPzurGJUzUFelJfyOXzZIkvynlSESbU8lyDnic5g38AVjOx-O9PTDPqBvlU_cx99H84X8rWh',
    keys: {
      auth: '9TOw8sgt02oK95o3ZHjRnA==',
      p256dh: 'BI5hyRF/zN1jyJqu3c5KUtFaFzND/krtnTeZqL9I5ZtDC71f3EYEKZj3yytFlmKf1H7JAc3SC7zReoMLX0xisEs='
    }
  }

  webpush.sendNotification(
    registrationInfo,
    'test',
    options
  )
    .then((resp) => {
      console.log(resp)
    })
    .catch((err) => {
      console.error(err)
    })
}
