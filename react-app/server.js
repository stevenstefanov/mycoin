// Define required packages
const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Use routes
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/reactcrypto',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Send every request to the React app
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// Start the API server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
});