require('dotenv/config');
const axios = require('axios')

class Request {
  constructor() {
    this.request = axios.create({
      baseURL : process.env.BASE_URL
    })
  }
  
  getMedias(title,type) {
    return this.request.get(`${title}&type=${type}`)
  }

}

module.exports = new Request()