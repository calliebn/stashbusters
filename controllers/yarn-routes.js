const router = require('express').Router();
const { Yarn } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:user_id', async (req, res) => {
    console.log(req.params.user_id)
    try {
        const allYarn = await Yarn.findAll({
            where: {
                user_id: req.params.user_id
            },

            attributes: [
                'company',
                'brand',
                'colorway',
                'yardage',
                'grams',
                'weight',
                'skeins',
                'dye_lot'
            ]
        })
        console.log(allYarn)
        const yarns = allYarn.map((yarns) => yarns.get({ plain: true }))
        console.log(yarns)

        res.render('yarn', {
            yarns,
            // logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;