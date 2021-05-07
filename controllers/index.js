const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const yarnRoutes = require('./yarn-routes.js');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/api', apiRoutes);
router.use('/yarn', yarnRoutes);
router.use((req, res) => {
    res.status(404).end();
})


module.exports = router;
