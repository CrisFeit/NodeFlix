require('dotenv/config');
const axios = require('axios')

class Request {
  constructor() {
    this.url = axios.create({
      baseURL : `${process.env.API_KEY}&t=`
    })
  }
  
  getData(title,type) {
    return this.url.get(`${title}&type=${type}`)
  }

}

module.exports = new Request()