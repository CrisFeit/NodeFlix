const model = require('../model/model')
const request = require('../model/request')
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
          medias: model[activeRoute]
        })
      } else {
        return res.render('error', {
          activeRoute,
          routes: this.routes,
          message: 'Missing Named Folders'
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
    return promises.filter((infos, index) => {
      infos.data.Folder = folders[index]
      return infos.data.Response.toLowerCase() == 'true'
    }).map(infos => {
      // infos.data.Genre.includes('Animation') ? infos.data.Type = 'animes' : null
      return infos.data
    })
  }

  getType(req) {
    if(req.url == '/animes') return 'series'
    if(req.url == '/movies') return 'movie'
    return req.url.replace('/', '')
  }
}

module.exports = new Controller()