const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser'); 
const withAuth = require('./utils/auth'); 

const secret = 'supersupersecret'; 

const routes = require('./routes'); 
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 
// Serve up static assets (for heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cloutmedia",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// api rotes
app.use(routes);
//verify token
app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200); 
})

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

//First commit :)
