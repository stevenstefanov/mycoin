const router = require('express').Router();
const { User, Coin } = require( '../models' )
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const portfolioData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },

            include: 
                {
                    model: Coin
                },
            
        });
        
        const portfolio = portfolioData.get({plain: true})

        res.status(200).json(('portfolio', {
            ...portfolio,
            logged_in: true
        }));

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;