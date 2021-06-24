const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coinSchema = new Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Coin = mongoose.model('Coin', coinSchema);

export default Coin;