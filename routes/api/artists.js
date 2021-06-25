const router = require("express").Router();
const artistsController = require('../../controllers/artistsController'); 

router.route("/signup")
    .post(artistsController.create)

router.route("/login")
    .post()

router.route("/discover")
    .get(artistsController.findAll)

router.route("/:id")
    .get(artistsController.findById)
    .put(booksController.update)


module.exports = router; 