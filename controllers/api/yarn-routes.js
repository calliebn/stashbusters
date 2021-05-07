const router = require('express').Router();
const { Yarn } = require('../../models');

const withAuth = require('../../utils/auth');

// Creates the yarn cards "/api/yarn"
router.post('/', async (req, res) => {
  try {
    const newYarn = await Yarn.create({
      company: req.body.company,
      brand: req.body.brand,
      colorway: req.body.colorway,
      yardage: req.body.yardage,
      grams: req.body.grams,
      weight: req.body.weight,
      skeins: req.body.skeins,
      dye_lot: req.body.dye_lot,
      user_id: req.session.user_id,
    });

    res.status(200).json(newYarn);
  } catch (err) {
    res.status(400).json(err);
  }
});

// deletes the yarn cards
router.delete('/:id', async (req, res) => {
  try {
    const yarnData = await Yarn.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!yarnData) {
      res.status(404).json({ message: 'No yarn found with this id!' });
      return;
    }

    res.status(200).json(yarnData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets the yarn cards
router.get('/', (req, res) => {
  Yarn.findAll({
    where: {
      user_id: req.session.user_id
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
      id: req.params.id,
    },
    attributes: ['company', 'brand', 'colorway', 'yardage', 'grams', 'weight', 'skeins', 'dye_lot']
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
    })
});

// Updates an existing yarn card
router.put('/:id', (req, res) => {
  Yarn.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbYarnData => {
      if (!dbYarnData) {
        res.status(404).json({ message: 'A yarn with this id does not exist' });
        return
      }
      res.json(dbYarnData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;
