const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const yarnRoutes = require('./yarn-routes.js');

router.use('/users', userRoutes);
router.use('/yarn', yarnRoutes);

module.exports = router;
