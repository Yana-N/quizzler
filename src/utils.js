const convertNumToLetter = (num) => {
  return String.fromCharCode(97 + parseInt(num, 10))
}

const getKeyByValue = (obj, value) =>
  Object.keys(obj).find(key => obj[key] === value)

const shuffleValues = obj => {
  return Object.keys(obj)
    .sort(() => Math.random() - 0.5)
    .map(k => obj[k])
}

export { convertNumToLetter, getKeyByValue, shuffleValues }
