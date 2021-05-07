const router = require('express').Router();
const { User, Profile } = require('../models');
const withAuth = require('../utils/auth');

// Gets profile of user
router.get('/', withAuth, async (req, res) => {
  try {
    const newProfile = await Profile.findOne({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'city', 'craft', 'fav_yarn', 'pets'],

      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        },
      ],
    });
    const profiles = profileData.map((profile) => profile.get({ plain: true }));

    req.render('profile', {
      profiles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
