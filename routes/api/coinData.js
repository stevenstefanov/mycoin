const router = require('express').Router();
const rp = require('request-promise');

router.get('/', (req, res) => {
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          'start': '1',
          'limit': '10',
          'convert': 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': '7b425e31-3d77-4f19-81b4-62d933a34f22'
        },
        json: true,
        gzip: true
      };
      
      rp(requestOptions).then(data => {
        res.json(data);
      }).catch((err) => {
        res.json(err.message);
      });
});

module.exports = router;