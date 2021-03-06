/* get specific keys from directory */
const child = require('child_process')
const string = 'i18n.__'
const dir = './src'
const lines_src = child.execSync(`grep -r ${string} ${dir}`).toString().split('\n').map(l => l.trim()).filter(l => l.length)
const keys_src = lines_src.map(l => l.split('i18n.')).join('__').split('__').filter(l => l.startsWith('(\'')).map(l => l.split('\'')[1])
const unique_src = new Set([...keys_src.sort()])


/* read lines from file, get keys */
const fs = require('fs')
const filePath = './locales/zh-CN.json'
const lines_loc = fs.readFileSync(filePath).toString().split('\n').map(l => l.trim()).filter(l => l.length)
const filtered_loc = lines_loc.filter(l => !(/====/.test(l)))
const keys_loc = filtered_loc.map(l => l.split('"')[1]).filter(k => !!k)
const unique_loc = new Set([...keys_loc.sort()])

const not_loc = [...unique_src].filter(k => !unique_loc.has(k))
const not_src = [...unique_loc].filter(k => !unique_src.has(k))

console.log('keys in src but not in locale:\n ', not_loc)
console.log('keys in locale but not in src:\n ', not_src)
