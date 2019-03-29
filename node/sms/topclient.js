TopClient = require('top').Client

var client = new TopClient({
  'appkey': '23831523',
  'appsecret': 'c26ded3696fbf0e29fccb8cb49f8e968',
  'REST_URL': ' http://gw.api.taobao.com/router/rest '
})
console.log(client)
// client.config({
//   'extend': '',
//   'sms_type': 'normal',
//   'sms_free_sign_name': 'icetower冰塔科技',
//   'sms_param': "{name:'yang'}",
//   'rec_num': '15060636615',
//   'sms_template_code': 'SMS_67136157'
// }, function (error, response) {
//   if (!error) console.log(response)
//   else console.log(error)
// })
