const { Router } = require('express');

const router = new Router()

const controller = require('./controller/controller')

router.get(controller.routes.home  , (req,res)=> res.redirect(controller.routes.movies))

router.get(controller.routes.movies , controller.renderCollection)

router.get(controller.routes.series , controller.renderCollection)

router.get(controller.routes.animes , controller.renderCollection)

module.exports = router;