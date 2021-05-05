const router = require('express').Router();

const { endsWith } = require('sequelize/types/lib/operators');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const yarnRoutes = require('./yarn-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/yarn', yarnRoutes);
router.use((req, res) => {
    res.status(404).end();
})


module.exports = router;
