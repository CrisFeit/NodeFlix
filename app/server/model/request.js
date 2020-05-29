require('dotenv/config');
const axios = require('axios')

class Request {
  constructor() {
    this.url = axios.create({
      baseURL : `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=`
    })
  }
  
  getMedias(title,type) {
    return this.url.get(`${title}&type=${type}`)
  }

}

module.exports = new Request()