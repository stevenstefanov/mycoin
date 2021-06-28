const router = require('express').Router();
const userRoutes = require('./userRoutes');
const coinRoutes = require('./coinRoutes');

console.log("THIS IS INDEX.JS");

router.use('/users', userRoutes);
router.use('/coins', coinRoutes);

module.exports = router;