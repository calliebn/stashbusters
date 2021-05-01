const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

// Homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id'],
      include: [
        {
          model: Comment,
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
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
