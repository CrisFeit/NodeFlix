const Request = require('../model/request')
const Genres = require('../model/genre')

class Media {

  movies = {}

  series = {}

  animes = {}

  async filterMedias(folders, type,vesel) {
    let promises = await Promise.all(folders.map(folder => Request.getData(folder, type)))
    
    return  promises.filter((media, index) => {
      media.data.Folder = folders[index]
      return media.data.Response.toLowerCase() == 'true'
    }).map(media => {
      media.data.Genre = Genres.findGenre(media.data.Genre)
      if(vesel.hasOwnProperty(media.data.Genre)){
        vesel[media.data.Genre].push(media.data)
      }else{
        vesel[media.data.Genre] = [media.data]
      }
    })
  }

}

module.exports = new Media();