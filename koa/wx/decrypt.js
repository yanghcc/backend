let fetch = require('node-fetch')
let WXBizDataCrypt = require('./WXBizDataCrypt') // 解密微信加密数据

function handleData(appId, sessionKey, encryptedData, iv) {
  const pc = new WXBizDataCrypt(appId, sessionKey)
  return pc.decryptData(encryptedData, iv)
}
const decrypt = async (ctx) => {
  const {
    code,
    encryptedData,
    iv
  } = ctx.query
  const appid = '***'
  const secret = '***'
  const keyInfo = await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`)
  const {openid, session_key} = await keyInfo.json()
  const data = handleData(appid, session_key, decodeURIComponent(encryptedData), decodeURIComponent(iv))
  console.log(session_key)
  data['openid'] = openid
  ctx.body = data
}
module.exports = decrypt