require('dotenv/config');
const axios = require('axios')

class Request {
  constructor() {
    this.request = axios.create({
      baseURL : process.env.BASE_URL
    })
  }
  
  getMedias(media,type = 'movie') {
    return this.request.get(`${media}&type=${type}`)
  }
}

module.exports = new Request()