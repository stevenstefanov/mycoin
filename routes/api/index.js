const router = require('express').Router();
const userRoutes = require('./users');
const coinRoutes = require('./coins');
const coinDataRoutes = require("./coinData")

console.log("THIS IS INDEX.JS");

router.use('/users', userRoutes);
router.use('/coins', coinRoutes);
router.use("/coinData", coinDataRoutes);


module.exports = router;