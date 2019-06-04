const chalk = require('chalk')
const CID = require('cids')

const _pre = obj => {
  if (Array.isArray(obj)) return '['
  return '{'
}
const _post = obj => {
  if (Array.isArray(obj)) return ']'
  return '}'
}

module.exports = (obj, indent = 0, threshold = 80) => {
  let pre = Array.from({ length: indent }).map(() => ' ').join('')
  let lines = []
  for (let key in obj) {
    let value = obj[key]
    let line
    if (Array.isArray(obj)) {
      line = ''
    } else {
      line = chalk.green(key) + ': '
    }
    if (CID.isCID(value)) lines.push(line + 'CID(' + chalk.red(value.toString()) + ')')
    else if (Buffer.isBuffer(value)) lines.push(line + 'Bytes(' + `{${chalk.green('size')}: ${chalk.red(value.length)}})`)
    else if (typeof value === 'object' && value !== null) {
      lines.push(line + module.exports(value, indent + 2, threshold - line.length))
    } else {
      lines.push(line + chalk.red(JSON.stringify(value)))
    }
  }
  if (lines.join(', ').length < threshold) return _pre(obj) + ' ' + lines.join(', ') + ' ' + _post(obj)
  let ipre = '\n' + pre + '  '
  return _pre(obj) + ipre + lines.join(ipre) + '\n' + pre + _post(obj)
}
