import * as CONFIG from '../utils/config.js'

class Response { }

class SuccessResponse extends Response { }

class ErrorResponse extends Response { }

const BASE_URL = 'https://api.foxbit.com.br'

const ajax = ({ method, url, query = '', headers, body = null } = {}) => {
  return new Promise((s, f) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, `${BASE_URL}${url}?${query}`, true)

    Array.from(headers).map(([key, value]) => xhr.setRequestHeader(key, value))
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*')
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

    const onComplete = () => xhr.status == 200 ? s(new SuccessResponse(xhr)) : f(new ErrorResponse(xhr))

    xhr.onload = () => onComplete()
    xhr.onerror = () => onComplete()

    return xhr.send(JSON.stringify(body))
  })
}

const getHeaders = (key = CONFIG.key, timestamp = Date.now()) => {
  const userInfo = `${timestamp}${CONFIG.userId}${key}`;

  const signature = '' // sha256.hmac(CONFIG.secretKey, userInfo)

  return {
    'X-FB-ACCESS-KEY': key,
    'X-FB-ACCESS-TIMESTAMP': timestamp,
    'X-FB-ACCESS-SIGNATURE': signature,
  }
}

export const me = () => {
  const method = 'GET'
  const url = '/rest/v3/me'
  return ajax({ method, url, headers: getHeaders() })
}
