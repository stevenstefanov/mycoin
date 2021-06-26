const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const portfolioRoutes = require('./portfolioRoutes')

router.use('/', homeRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/api', apiRoutes);

module.exports = router;