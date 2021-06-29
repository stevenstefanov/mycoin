const router = require('express').Router();
const coinRoutes = require('./api');

// Coin routes
router.use('/coins', coinRoutes);

module.exports = router;