const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const yarnRoutes = require('./yarn-routes');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/api', apiRoutes);
router.use('/yarn', yarnRoutes);

module.exports = router;
