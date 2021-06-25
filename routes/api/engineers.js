const router = require("express").Router();
const engineersController = require('../../controllers/engineersController'); 

router.route("/")
    .get(engineersController.findAll)
    .post(engineersController.create); 


router.route("/:id")
    .get(engineersController.findById)
    .put(booksController.update)


module.exports = router; 