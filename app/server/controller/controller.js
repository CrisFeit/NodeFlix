const model = require('../model/model')
const request = require('../model/request')
const genre = require('../model/genre')
class Controller {
  
  routes = {
    movies: '/movies',
    series: '/series',
    animes: '/animes',
  }
  
  renderCollection = async (req, res, next) => {
    let type = this.getType(req)
    let activeRoute = req.url.replace('/', '')
    try {
      let folders = model.getFoldersNames(activeRoute)
      if (folders) {
        model[activeRoute] = await this.filterMedias(folders, type)
        return res.render('index', {
          activeRoute,
          routes: this.routes,
          medias: model[activeRoute],
          genres : genre.genres
        })
      } else {
        return res.render('error', {
          activeRoute,
          routes: this.routes,
          message: 'Missing Named Folders',
        })
      }
    } catch (err) {
      res.render('error', {
        activeRoute,
        routes: this.routes,
        message: err + ' \n Check the Folders Instructions'
      });
      next()
      return
    }
  }

  renderSingle = (req, res) => {
    let activeRoute = req.url.replace('/','').split('/')[0]
    const media = model[activeRoute].find(media => media.Folder == req.params.id)
    res.render('single',{
      activeRoute,
      routes:this.routes,
      media
    })
  }

  async filterMedias(folders, type) {
    let promises = await Promise.all(folders.map(folder => request.getMedias(folder, type)))
    return promises.filter((media, index) => {
      media.data.Folder = folders[index]
      return media.data.Response.toLowerCase() == 'true'
    }).map(media => {
      media.data.Genre = genre.findGenre(media.data.Genre)
      // media.data.Genre.includes('Animation') ? media.data.Type = 'animes' : null
      return media.data
    })
  }

  getType(req) {
    if(req.url == '/animes') return 'series'
    if(req.url == '/movies') return 'movie'
    return req.url.replace('/', '')
  }
}

module.exports = new Controller()