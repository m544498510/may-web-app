export function removeItemFromArray(arr, item) {
  const newArr = arr.slice();
  const index = newArr.indexOf(item);
  newArr.splice(index, 1);
  return newArr;
}

export function getUrlParam(key) {
  key = String(key).trim();
  let url = window.location.href.split("#");
  url = url[0];
  let urlArray = decodeURI(url).split("?");
  if (urlArray.length > 1) {
    let paramArray = urlArray[1].split("&");
    if (paramArray.length > 0) {
      for (let i = 0; i < paramArray.length; i++) {
        let param = paramArray[i].split("=");
        if (key === param[0]) return param[1];
      }
    }
  }
  return null;
}

export function getUrlParams() {
  let url = window.location.href.split("#")[0];
  let paramStr = decodeURI(url).split("?")[1];
  const result = {};
  if(paramStr){
    paramStr.split('&').forEach(str => {
      const tmp = str.split('=');
      result[tmp[0]] = tmp[1];
    });
  }
  return result;
}

export function isNullOrEmpty(v) {
  return null === v || undefined === v || "" === v;
}

export function point2String(point) {
  return "(" + point.lng + "," + point.lat + ")";
}

export function getFileNameFromPath(path) {
  const tmpArr = path.split('/');
  return tmpArr[tmpArr.length - 1];
}

export function getSegIdFromKmlName(kmlName) {
  const tmpArr = kmlName.split(/.kml|_/);
  return tmpArr[tmpArr.length - 2];
}

export function removeValueFromArray(array = [], value) {
  const index = array.indexOf(value);
  return array.splice(index, 1);
}

export function parseTimeSpanToStr(timeSpan) {
  let result = '';
  const ms = timeSpan % 1000;
  const s = Math.floor(timeSpan / 1000) % 60;
  const m = Math.floor(timeSpan / 60000) % 60;
  const h = Math.floor(timeSpan / 3600000) % 24;
  const day = Math.floor(timeSpan / 86400000);
  if (day > 0) {
    result = day + 'day';
  }
  if (h > 0) {
    result += ' ' + h + 'hour';
  }
  if (m > 0) {
    result += ' ' + m + 'min';
  }
  if (s > 0) {
    result += ' ' + s + 's';
  }
  if (ms > 0) {
    result += ' ' + ms + 'ms';
  }
  if (result === '') {
    result = '0ms';
  }
  return result.trim();
}

/***
 * get the window scroll data
 * @returns {{top: number, left: number}}
 */
export function getScrollData() {
  const result = {
    top: 0,
    left: 0
  };
  if (document.documentElement && document.documentElement.scrollTop) {
    result.top = document.documentElement.scrollTop;
  } else {
    result.top = document.body.scrollTop;
  }
  if (document.documentElement && document.documentElement.scrollLeft) {
    result.left = document.documentElement.scrollLeft;
  } else {
    result.left = document.body.scrollLeft;
  }
  return result;
}

export function formatTime(time) {
  try {
    const arr = time.split(".");
    if (null == arr || arr.length === 0) {
      return time;
    } else {
      return arr[0];
    }
  } catch (e) {
    return time;
  }
}