const router = require('express').Router();
const { User, Yarn } = require('../models');
const sequelize = require('../config/connection');

// Homepage
router.get('/', async (req, res) => {

  res.render('homepage');
});

module.exports = router;
