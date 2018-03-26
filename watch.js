const chokidar = require('chokidar')

const watcher = chokidar.watch('file or dir', { ignored: /^\./, persistent: true })

watcher
  .on('add', (path) => { console.log('File', path, 'has been added') })
  .on('change', (path) => { console.log('File', path, 'has been changed') })
  .on('unlink', (path) => { console.log('File', path, 'has been removed') })
  .on('error', (error) => { console.error('Error happened', error) })
