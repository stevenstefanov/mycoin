const router = require('express').Router();
const { Coin } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth,  async (req, res) => {
  try {
    const newCoin = await Coin.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCoin);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const coin = await Coin.update(
//       {

//       }
//     )
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const coinData = await Coin.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!coinData) {
      res.status(404).json({ message: 'No coin found with this ID!' });
      return;
    }

    res.status(200).json(coinData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
