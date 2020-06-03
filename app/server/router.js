const { Router } = require('express');

const router = new Router()

const middleware = require('./middleware/middleware')
const controller = require('./controller/controller')

router.get('/',
  (req, res) => res.redirect(controller.routes.movies)
)

router.get(controller.routes.movies,
  middleware.removeLastShash,
  controller.renderCollection
)
router.get(`${controller.routes.movies}/:id`,
  middleware.removeLastShash,
  controller.renderSingle
)

router.get(controller.routes.series,
  middleware.removeLastShash,
  controller.renderCollection
)
router.get(`${controller.routes.series}/:id`,
  controller.renderSingle
)

router.get(controller.routes.animes,
  middleware.removeLastShash,
  controller.renderCollection
)
router.get(`${controller.routes.animes}/:id`,
  controller.renderSingle
)

module.exports = router;