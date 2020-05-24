const model   =  require('../model/model')
const request =  require('../model/request')
class Controller {

  routes = {
    home: '/',
    movies: '/movie',
    series: '/series',
    animes: '/animes',
    episode: '/episode'
  }

  renderCollection =  async (req, res,next) => {
    try{
    let type = this.getType(req)
    let route = req.url.replace('/','')
    let folders = model.getFoldersNames(route)
    if (folders) {
      model[route] = await this.filterMedias(folders,type)
      return res.render('index',{ medias : model[route] })
    } else {
      return res.render('error', { message: 'Missing Named Folders' })
    }
    
  }catch(err){
    res.render('error',{message: err + ' \n Check the Folders Instructions'});
    next()
    return
  }
    // console.log(request.getTitles());
  }

  async filterMedias(folders,type){
    let promises = await Promise.all(folders.map(folder => request.getMedias(folder,type)))
      return promises.filter((infos,index) => {
        infos.data.Folder = folders[index]        
        return infos.data.Response.toLowerCase() == 'true'
      }).map(infos => {
        infos.data.Genre.includes('Animation') ? infos.data.Type = 'anime' : null
        return  infos.data
      })
  }

  getType(req){
    return req.url == '/animes' ? 'series' : req.url.replace('/','')
  }
}

module.exports = new Controller()