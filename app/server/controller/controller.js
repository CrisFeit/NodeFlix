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
        if(!Object.keys(model[activeRoute]).length){
          await this.filterMedias(folders, type,model[activeRoute])
        }
        
        return res.render('index', {
          activeRoute,
          medias : model[activeRoute],
          routes: this.routes,
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
    const media = model[activeRoute][req.query.genre].find(media => media.Folder == req.params.id)
    res.render('single',{
      activeRoute,
      routes:this.routes,
      media
    })
  }

  async filterMedias(folders, type,vesel) {
    let promises = await Promise.all(folders.map(folder => request.getMedias(folder, type)))
    
    return  promises.filter((media, index) => {
      media.data.Folder = folders[index]
      return media.data.Response.toLowerCase() == 'true'
    }).map(media => {
      media.data.Genre = genre.findGenre(media.data.Genre)
      // media.data.Genre.includes('Animation') ? media.data.Type = 'animes' : null
      if(vesel.hasOwnProperty(media.data.Genre)){
        vesel[media.data.Genre].push(media.data)
      }else{
        vesel[media.data.Genre] = [media.data]
      }
    })
  }

  getType(req) {
    if(req.url == '/animes') return 'series'
    if(req.url == '/movies') return 'movie'
    return req.url.replace('/', '')
  }
}

module.exports = new Controller()