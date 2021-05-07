const router = require("express").Router();
const { User, Yarn } = require("../models");
const sequelize = require('../config/connection');

const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
  try {
    // Get all yarn and JOIN with user data
    const yarnData = await Post.findAll({
      attributes: ['id'],
      include: [
        {
          model: Yarn,
          attributes: [
            'company',
            'brand',
            'colorway',
            'yardage',
            'grams',
            'weight',
            'skeins',
            'dye_lot',
            'user_id',
          ],
          include: { model: User, attributes: ['id'] },
        },
      ],
    });

  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Yarn }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
