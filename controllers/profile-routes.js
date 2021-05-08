const router = require('express').Router();
const { User, Profile } = require('../models');
const withAuth = require('../utils/auth');

// Gets profile of user withAuth,
router.get('/:id', async (req, res) => {

    console.log(req.params.id)
    try {
        const newProfile = await Profile.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'city',
                'craft',
                'fav_yarn',
                'pets'
            ],

            include: [{
                model: User,
                attributes: ['username', 'email']
            }]
        });
        const profile = newProfile.get({ plain: true })

        res.render('profile', {
            profile
            // logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;