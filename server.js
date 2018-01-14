const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var apiTest = require("./routes/apitest");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use('/apitest',apiTest)



// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/shapegame",
  {
    useMongoClient: true
  }
);
app.post('/test', (req, res) => {
  console.log(req.body)
  // res.send({ express: `Hello Anastasia your score is ${req.body.score}` });
  // mongo herre 
    console.log(`Hello Anastasia your score is ${req.body.score}`)
  res.json({score:req.body.score})
});
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
