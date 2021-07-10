const router = require('express').Router();
const { User, Coin } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  console.log("hello")

  try {
    // Get all coins and JOIN with user data
    const coinData = await Coin.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // // Serialize data so the template can read it
    // const coins = coinData.map((coin) => coin.get({ plain: true }));

    // Pass serialized data and session flag into template

    console.log(coinData)
    
    res.json(coinData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:symbol', async (req, res) => {
  try {
    const coinData = await Coin.findOne({ 
        where: {
          user_id: req.session.user_id,
          symbol: req.body.symbol
        }
      });
    console.log(coinData);
    const coin = coinData.get({ plain: true });
    console.log(coin);
    res.json(coin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth,  async (req, res) => {
  console.log('test')
  console.log(req.body);
  try {
    const newCoin = await Coin.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // console.log(req.session.user_id)
    // const coin = await Coin.findOne({ 
    //   where: {
    //     user_id: req.session.user_id,
    //     symbol: req.body.symbol
    //   }
    // })

    // if (coin) {
    //   // update existing coin, then call coin.save()
    // }
    // else {
    //   // create new coin
    // }

    res.status(200).json(coin);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.put('/:symbol', async (req, res) => {
  try {
    const coin  = await Coin.increment(
      'holdings', { by: req.body.holdings, where: {symbol: req.body.symbol} }
    )
    res.status(200).json(coin);
  } catch (err) {
      res.status(500).json(err);
    };
});

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
