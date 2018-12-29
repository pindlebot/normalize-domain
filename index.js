
const regex = /(?:w{3}\.)?((\*\.)?([\w\d-]{1,63}\.){1,2}[\w\d-]{1,63})/m

function normalize (str) {
  let matches = str.match(regex)
  return (matches && matches[1]) || undefined
}

normalize.regex = regex

module.exports = normalize
