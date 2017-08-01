### fs.readdirAsync with bluebird

```js
const fs = require('fs')
const path = require('path')
const promise = require('bluebird')
promise.promisifyAll(fs)
const myPath = './'
fs.readdirAsync(path.resolve(myPath))
  .then(v => console.log(v))
  .catch(e => console.log(e))
```


### read dir recursively

```js
const fs = require('fs')
const path = require('path')
const promise = require('bluebird')
promise.promisifyAll(fs)
const readdirStatsAsync = async (dirPath) => {
  const entries = await fs.readdirAsync(dirPath)
  if (entries.length === 0) return []
  const promises = entries.map(async (entry) => {
    try {
      const entryPath = path.join(dirPath, entry)
      const stat = await fs.lstatAsync(path.join(dirPath, entry))
      if (stat.isDirectory()) {
        return Object.assign(stat, { children: await readdirStatsAsync(entryPath) })
      }
      return stat
    } catch (e) {
      return null
    }
  })
  return (await Promise.all(promises)).filter(x => !!x)
}
const myPath = './'
readdirStatsAsync(myPath).then(v => console.log(v)).catch(e => console.log(e))
```
