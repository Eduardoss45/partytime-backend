const router = require("express").Router();

const servicesRouter = require("./services");

router.use("/", servicesRouter);

const partiesRouter = require("./parties");

router.use("/", partiesRouter);

module.exports = router;
