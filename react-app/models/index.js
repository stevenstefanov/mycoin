const User = require('./User');
const Coin = require('./Coin')

User.hasMany(Coin, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Coin.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Coin}
