const { Router } = require('express');

const router = new Router()

const middleware = require('./middleware/middleware')
const controller = require('./controller/controller')

router.get('/',
  (req, res) => res.redirect(controller.routes.movies)
)

router.get(controller.routes.movies,
  middleware.removeLastSlash,
  controller.renderCollection
)
router.get(`${controller.routes.movies}/:id`,
  middleware.removeLastSlash,
  controller.renderSingle
)

router.get(controller.routes.series,
  middleware.removeLastSlash,
  controller.renderCollection
)
router.get(`${controller.routes.series}/:id`,
  middleware.removeLastSlash,
  controller.renderSingle
)

router.get(controller.routes.animes,
  middleware.removeLastSlash,
  controller.renderCollection
)
router.get(`${controller.routes.animes}/:id`,
  middleware.removeLastSlash,
  controller.renderSingle
)

module.exports = router;