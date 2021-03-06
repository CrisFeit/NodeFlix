require('dotenv/config')
const express = require('express')
const routes = require('./router')
const path = require('path')
const opn  = require('opn')

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(express.static(path.join(__dirname,'public/assets')))
    this.server.set('views',path.join(__dirname,'view'))
    this.server.set('view engine' , 'pug')
  }

  routes() {
    this.server.use(routes)
  }
}

const app = new App().server

app.use((req,res,next)=>{
  return res.status(404).render('error' ,{ message: 'Not Found '})
})
app.use((err,req,res,next)=>{
  return res.status(500).render('error',{ message: 'Error Occured'})
})

app.listen( process.env.PORT || 5050,()=>{

  if(process.env.NODE_ENV === 'start') {
    opn(`http://localhost:${ process.env.PORT || 5050 }`);
  }
  
  console.log(`NodeFlix is running on port ${process.env.PORT || 5050}...`)
})