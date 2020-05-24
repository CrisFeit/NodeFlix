const { readdirSync } = require('fs')
const path = require('path')
const currentDir = path.resolve(process.cwd())

class Model {
  
  movies = []

  series = []

  animes = []

  getFoldersNames(folder) {
      let regex = /s$/
      regex.test(folder) ? null : folder = folder + 's'
      let source = path.resolve(currentDir, './medias/'+folder)
      if(source){
        return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
      }else{
        return false
      }
  }
}

module.exports = new Model();