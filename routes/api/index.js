const router = require("express").Router();
const artistRoutes = require("./artists");
const engineerRoutes = require('./engineers');


// user routes
router.use("/artists", artistRoutes);
router.use("/engineer", engineerRoutes); 

module.exports = router;
