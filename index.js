const express = require("express");
const bodyParser = require("body-parser");
const Promise = require("bluebird");
const fs = require("fs");
const app = express();
const port = 7777;
Promise.promisifyAll(fs);

const FeatureModel = require("./database/Feature.js");
const ReviewModel = require("./database/Review.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/locals-say", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./client"));

/* Features */
app.get("/features", (req, res) => {
  FeatureModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});


/* Reviews */
app.get("/reviews", (req, res) => {
  ReviewModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

app.put("/reviews/vote/:id/:up", (req, res) => {
  const val = req.params.up === 'true' ? 1 : -1;
  ReviewModel.findByIdAndUpdate(req.params.id, { $inc: { likes: val } }, { new: true }, (err, data) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));
