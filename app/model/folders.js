const { readdirSync } = require('fs')
const path = require('path')
const currentDir = path.resolve(process.cwd())

class Folder {

  getFoldersNames(folder) {
    let source = path.resolve(currentDir,'./medias/' + folder)
    if (source) {
      return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    } else {
      return false
    }
  }

  getFiles(folderPath) {
    let source = path.join(currentDir, folderPath)
    if (source) {
      readdirSync(source, 'utf8', (err, item) => {
        if (err) {
          console.log('Unable to scan directory: ' + err);
          return false 
        }
        files.forEach(function (file) {
          // abrir os arquivos file
          console.log('files',file);
        })
      })
    }
  }
}

module.exports = new Folder()