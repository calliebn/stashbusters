const router = require("express").Router();
const { User, Yarn } = require("../models");
const sequelize = require('../config/connection');

// Homepage
router.get("/", async (req, res) => {
  // try {
  //   const yarnData = await Yarn.findAll({
  //     attributes: ["id"],
  //     include: [
  //       {
  //         model: Yarn,
  //         attributes: [
  //           "company",
  //           "brand",
  //           "colorway",
  //           "yardage",
  //           "grams",
  //           "weight",
  //           "skeins",
  //           "dye_lot",
  //           "user_id",
  //         ],
  //         include: { model: User, attributes: ["id"] },
  //       },
  //     ],
  //   });

    // Serialize data so the template can read it
    const yarns = yarnData.map((yarn) => yarn.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      // yarns,
      // logged_in: req.session.logged_in,
    });
    console.log("error in codes", err);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
