let Media = require('../model/medias')
const Folder = require('../model/folders')

class Controller {
  
  routes = {
    movies: '/movies',
    series: '/series',
    animes: '/animes',
    books: '/books',
  }
  
  renderCollection = async (req, res, next) => {
    let type = this.getType(req)
    let activeRoute = req.url.replace('/', '')
    try {
        let folders = Folder.getFoldersNames(activeRoute)
        await Media.filterMedias(folders, type,activeRoute)
        Media[activeRoute].quantity = folders.length
      return res.render('index', {
        activeRoute,
        medias : Media[activeRoute],
        routes: this.routes,
      })
    } catch (err) {
      res.render('error', {
        activeRoute,
        routes: this.routes,
        message: err + ' \n Check the Folders Instructions'
      });
    }
  }

  renderSingle = (req, res) => {
    let activeRoute = req.url.replace('/','').split('/')[0]
    const media = Media[activeRoute][req.query.genre].find(media => media.Folder == req.params.id)
    res.render('single',{
      activeRoute,
      routes:this.routes,
      media
    })
  }

  getType(req) {
    if(req.url == '/animes') return 'series'
    if(req.url == '/movies') return 'movie'
    return req.url.replace('/', '')
  }
}

module.exports = new Controller()