import axios from 'axios';

const HttpCodeMsg = {
  200: 'Success',
  205: 'Processing',

  404: 'Service Not Found',
  422: 'Unprocessable Entity',

  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended',
};

// content must be JSON or JSONText
export function getCheckMsg(httpCode, { code, msg }) {
  return {
    httpCode,
    code,
    title: getMsgByHttpCode(httpCode) || '',
    msg: msg || '',
  };
}

function getMsgByHttpCode(httpCode) {
  return HttpCodeMsg[httpCode] || '';
}

export function successHandle(response) {
  return response.data;
}

export function errorHandle(error) {
  const { response } = error;
  const msgObj = getCheckMsg(response.status, response.data);
  msgObj.response = response;
  if (response.status === 401) {
    window.location.href = './#/login';
  }

  return Promise.reject(msgObj);
}

export function ajaxGet(url, param, success = successHandle, fail = errorHandle) {
  return axios.get(url, { params: param })
    .catch(fail)
    .then(success);
}

export function ajaxPost(url, param, success = successHandle, fail = errorHandle) {
  return axios.post(url, param)
    .catch(fail)
    .then(success);
}

export function ajaxPut(url, param, success = successHandle, fail = errorHandle) {
  return axios.put(url, param)
    .catch(fail)
    .then(success);
}

export function ajaxDel(url, param, success = successHandle, fail = errorHandle) {
  return axios.delete(url, {
    params: param,
  })
    .catch(fail)
    .then(success);
}

