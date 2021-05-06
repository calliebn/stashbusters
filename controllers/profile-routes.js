const router = require('express').Router();
const { User, Profile } = require('../models');
const withAuth = require('../utils/auth');

// Gets profile of user withAuth,
router.get('/', async (req, res) => {

    // console.log("my profile")
    try {
        const newProfile = await Profile.findOne({
            where: {
                // user_id: req.session.user_id
                user_id: req.body.user_id
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
        console.log("newProfile Data", newProfile);
        const profiles = newProfile.map((profile) => profile.get({ plain: true }));
        console.log("Profiles Data", profiles);
        req.render('profile', {
            profiles
            // logged_in: req.session.logged_in
        });
        // res.render('profile');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;