const router = require('express').Router();
const userRoutes = require('./userRoutes');
const coinRoutes = require('./coinRoutes');
const coinDataRoutes = require("./coinDataRoutes")

console.log("THIS IS INDEX.JS");

router.use('/users', userRoutes);
router.use('/coins', coinRoutes);
router.use("/coinData", coinDataRoutes);


module.exports = router;