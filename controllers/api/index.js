const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const yarnRoutes = require('./yarn-routes.js');
const profileRoutes = require('./profile-routes');

router.use('/users', userRoutes);
router.use('/yarn', yarnRoutes);
router.use('/profie', profileRoutes);

module.exports = router;
