
function writeResponse(body, res, contentType) {
  const bodyStr = JSON.stringify(body);
  res.write(bodyStr);
  res.end();
}

module.exports = {
  writeResponse
};

