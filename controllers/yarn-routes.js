const router = require('express').Router();
const { Yarn } = require('../models');

router.get('/', async (req, res) => {
    try {
        const allYarn = await Yarn.findAll({
            attributes: [
                'id',
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

        const yarns = allYarn.map((yarn) => yarn.get({ plain: true }))

        req.render('yarn', {
            yarns,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;