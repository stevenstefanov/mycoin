const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

console.log("OUTER INDEX");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;