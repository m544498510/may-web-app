/**
 *******************************************************************************
 *                       Continental Confidential
 *                  Copyright (c) Continental, AG. 2017
 *
 *      This software is furnished under license and may be used or
 *      copied only in accordance with the terms of such license.
 *******************************************************************************
 * @file cookieUtil.js
 * @brief cookie util module
 *******************************************************************************
 */


export default {
  getCookie,
  setCookie,
  deleteCookie
};

function getCookie(c_name) {
  const cookieArr = document.cookie.split(';');
  
  for (let i = 0; i < cookieArr.length; i++) {
    let x = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
    let y = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    if (x === c_name) {
      return window.decodeURIComponent(y);
    }
  }
}

function setCookie(c_name, value, exDays=0, exHours=0) {
  const exDate = new Date();
  exDate.setDate(exDate.getDate() + exDays);
  exDate.setMinutes(exDate.getMinutes() + exHours);
  
  const c_value = encodeURIComponent(value) +
    ((exDays === null) ? '' : '; expires=' + exDate.toUTCString());
  document.cookie = c_name + '=' + c_value;
}

function deleteCookie(c_name, path) {
  const exDate = new Date();
  exDate.setDate(exDate.getDate() - 1);
  
  document.cookie = c_name + '=' + '; expires=' + exDate.toUTCString() +
    (null === path ? '' : '; path=' + path);
}
