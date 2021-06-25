const router = require("express").Router();
const artistRoutes = require("./artists");
const engineerRoutes = require('./engineers');


// Book routes
router.use("/artists", artistRoutes);
router.use("/engineer", engineerRoutes); 

module.exports = router;
