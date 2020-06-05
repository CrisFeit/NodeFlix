const Request = require('../model/request')
const Genres = require('../model/genre')

class Media {

  movies = {}

  series = {}

  animes = {}

  books = {}

  async filterMedias(folders, type,route) {
    if(folders.length == this[route].quantity) return
    this[route] = new Object()
    let promises = await Promise.all(folders.map(folder => Request.getData(folder, type)))
    return  promises.filter((media, index) => {
      media.data.Folder = folders[index]
      return media.data.Response.toLowerCase() == 'true' 
    }).forEach(media => {
      media.data.Genre = Genres.findGenre(media.data.Genre)
        if(this[route].hasOwnProperty(media.data.Genre)){
            this[route][media.data.Genre].push(media.data)
          
        }else{
          this[route][media.data.Genre] = [media.data]
        }
    })
  }

}

module.exports = new Media();