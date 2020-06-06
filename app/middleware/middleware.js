class Middleware{

  removeLastSlash = (req,res,next) =>{
     /\/$/.test(req.url) ? res.redirect(req.url.replace(/\/$/, "")) : null
    next()
    return
  }
  
}

module.exports = new Middleware()