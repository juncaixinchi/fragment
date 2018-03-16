/*
 * convert `import` to `require`
 * node convert.js dir
 */

const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const entries = fs.readdirSync(path.resolve(dir)).map(p => path.join(dir, p))

const importPatten = /^import .* from/
entries.forEach((filePath) => {
  const isFile = fs.lstatSync(filePath).isFile()
  if (!isFile) return
  const lines = fs.readFileSync(filePath).toString().split('\n')
    .map((l) => {
      if (!importPatten.test(l)) return l
      const [a, b] = l.split(/import|from\s/).filter(x => !!x)
      return `const${a}= require(${b})`
    })
  fs.writeFileSync(filePath, lines.join('\n'))
})
