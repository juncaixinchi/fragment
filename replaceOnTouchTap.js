/*
 * replace `onTouchTap` by `onClick`
 * node replaceOnTouchTap.js dir
 */

const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const entries = fs.readdirSync(path.resolve(dir)).map(p => path.join(dir, p))

const reg = /onTouchTap/
const denote = 'onClick'
entries.forEach((filePath) => {
  const isFile = fs.lstatSync(filePath).isFile()
  if (!isFile) return
  const lines = fs.readFileSync(filePath).toString().split('\n')
    .map(l => l.replace(reg, denote))
  fs.writeFileSync(filePath, lines.join('\n'))
})
