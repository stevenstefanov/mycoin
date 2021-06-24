// Define required packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Connect to the Mongo Database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/reactcrypto'
);

// Use routes
app.use(routes);

// Send every request to the React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
});