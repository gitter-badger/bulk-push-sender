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
      return ch.sendToQueue(queue, Buffer.from(JSON.stringify([
        {
          endpoint: 'https://android.googleapis.com/gcm/send/dkui9nTv9eo:APA91bGFDL3fszycab1kaQJSdg8IWwg7s84_aN8JIfvhPbDCXVSMSVv2RjqyMYtTaKPSIZqMWyukGv93rMdud0cqNdbEkggGDgV4nDDxMFjci8HxL0FuRcVzvCJK_sTyexBTZg_lRgd0',
          keys: {
            userKey: 'BFvDo2fi5k8Zn/Yt5neNEfBVcqoZMVe6RiyJB3B2PT0LvIBsCB9ju5uc6ZirjkRIXB1b8yvf/EUsIwwVl2xObY4=',
            authSecret: 'MlJBv7MjkEVG+bCq69dmrg=='
          }
        },
        {
          endpoint: 'https://android.googleapis.com/gcm/send/dvT61LEKi08:APA91bHf5kAT2RanULlk9vQ-2IeyFmZqL95QvUuMQ2JxfsPFkgD9m5uxzvF4mEWslJ9V9EMBdhZcPKm4vqNSV-lvNjyLYQ0_tHiLs6OYHLxWcwk_gkRvDJ3BCYRSq8luSoilqikQ7S4O',
          keys: {
            keys: 'BEgKZz1cTvXjBU/4qZ1BnF9CivbIScpfJMRB3z9RtS/A336/USPaDtKrdqw3BMkWIXKed9OaG9KfKK0NOPXQDvs=',
            authSecret: 'RDbEp2Jo4FoSwTou7T39mA=='
          }
        },
        {
          endpoint: 'https://android.googleapis.com/gcm/send/fdkEx7xPXTM:APA91bFgEpRkoOnkHPT5jyojGt9DUolLSJHyXtG7ZcOHOFVWNqrqlMQocTuqj_YXA9-mlabHS_Z3t-mD11qx1rpTUXaHWJ0p16AyVuib0dYYZkHTDDgn0IkGXku2_I-sywMThHoccIu1',
          keys: {
            keys: 'BGF0rJp1uhez3FFZxLeQahRPFt5wxhrVGNmU8xGTEn783kIYXf7SAtJO8cnXX2PTSyVwQOpCsA31tMw2nMoSVH0=',
            authSecret: 'JdVYjO8fPF/HgWWoC4AXXQ=='
          }
        },
        {
          endpoint: 'https://android.googleapis.com/gcm/send/fQMX8fLw_k4:APA91bGhTK86iUrq77IjLh3qfwYaUvrRyeAbTbKn8ySmhV-Ltl5FuMGEShfmj2wjFM9-u38V0RCl_edXabmhRpE7XtoDW65U1FMIGHleBF5HOBwekSXaUV4KTvxnrIE7R3IGDm0G6NJ8',
          keys: {
            keys: 'BIz/He7EPADszsBwgFSbOsabTQ4OiVWMXsJGuoxPM08xFtpFdQNcouoJnhwn5mfGkNP7bn+tAo14bYWhvC7IB9M=',
            authSecret: 'qXCWKPeWbLzndpN9jfyBag=='
          }
        },
        {
          endpoint: 'https://android.googleapis.com/gcm/send/fB2KhtNtCK4:APA91bHkCpnQwXkLQNlbHYFcWYJVBiE8yiiytV8VvyLu8qsZhN8trBr0PVVzmeNV32QDfUpPaZEBppjthdqiZod-DY9z-o7rrljAHof4XRz5diZ5GGJXFQv2tte_Kfy575r138RM8wvJ',
          keys: {
            keys: 'BCu+pbVpnjiYmtI2Q/dtUwmN7VB0BoTYU6rZc6BmhLULSoVvOm7LQtcxyeP/zPoSZuTMu8DZfrLRNwUT3d++i+A=',
            authSecret: '+t1rmuasR5VunZ1bwkdnyQ=='
          }
        }
      ]
        )))
    })
  }).catch(console.warn)
}
