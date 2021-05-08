const router = require("express").Router();
const { User, Yarn } = require("../models");
const sequelize = require('../config/connection');

// Homepage
router.get('/', async (req, res) => {

  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

module.exports = router;

