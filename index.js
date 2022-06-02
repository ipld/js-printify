import chalk from 'chalk'
import { CID } from 'multiformats/cid'

const _pre = obj => {
  if (Array.isArray(obj)) return '['
  return '{'
}
const _post = obj => {
  if (Array.isArray(obj)) return ']'
  return '}'
}

function printify (obj, indent = 0, threshold = 80) {
  const pre = Array.from({ length: indent }).map(() => ' ').join('')
  const lines = []
  for (const key in obj) {
    const value = obj[key]
    let line
    if (Array.isArray(obj)) {
      line = ''
    } else {
      line = chalk.green(key) + ': '
    }
    if (CID.asCID(value)) lines.push(line + 'CID(' + chalk.red(value.toString()) + ')')
    else if (value instanceof Uint8Array) lines.push(line + 'Bytes(' + `{${chalk.green('size')}: ${chalk.red(value.length)}})`)
    else if (typeof value === 'object' && value !== null) {
      lines.push(line + printify(value, indent + 2, threshold - line.length))
    } else {
      lines.push(line + chalk.red(JSON.stringify(value)))
    }
  }
  if (lines.join(', ').length < threshold) return _pre(obj) + ' ' + lines.join(', ') + ' ' + _post(obj)
  const ipre = '\n' + pre + '  '
  return _pre(obj) + ipre + lines.join(ipre) + '\n' + pre + _post(obj)
}

export default printify
