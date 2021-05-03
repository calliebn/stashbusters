const router = require('express').Router();
const { Yarn, User } = require('../../models');

const withAuth = require('../../utils/auth');

// Creates the yarn cards
router.post('/', withAuth, async (req, res) => {
  try {
    const newYarn = await Yarn.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newYarn);
  } catch (err) {
    res.status(400).json(err);
  }
});

// deletes the yarn cards
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newYarn = await Yarn.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newYarn) {
      res.status(404).json({ message: 'No yarn found with this id!' });
      return;
    }

    res.status(200).json(newYarn);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets the yarn cards
router.get('/', (req, res) => {
  Yarn.findAll({
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
    .then(dbYarnData => res.json(dbYarnData.reverse()))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

// Gets one yarn
router.get('/:id', (req, res) => {
  Yarn.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['company', 'brand', 'colorway', 'yardage', 'grams', 'weight', 'skeins', 'dye_lot']
  })
})

  .then(dbYarnData => {
    if (!dbYarnData) {
      res.status(404).json({ message: 'This yarn cannot be found' });
      return;
    }
    res.json(dbYarnData);
  })

  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

// Updates an existing yarn card
router.put('/:id', withAuth, (req, res) => {
  Yarn.update({
    comapny: req.params.company,
    brand: req.params.brand,
    colorway: req.params.colorway,
    yardage: req.params.yardage,
    grams: req.params.grams,
    weight: req.params.weight,
    skeins: req.params.skeins,
    dye_lot: req.params.dye_lot
  },
    {
      where: {
        id: req.params.id
      }
    })
})

module.exports = router;
