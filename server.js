// import express
const express = require('express');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes/routeApi')(app);
require('./routes/routeHTML')(app);



app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`))