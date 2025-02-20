const Promise = require("bluebird");
const fs = require("fs");
const faker = require("faker");
const FeatureModel = require("./Feature.js");
const ReviewModel = require("./Review.js");
Promise.promisifyAll(fs);

const mongoose = require("mongoose");
const { random } = require("faker");
mongoose.connect("mongodb://localhost/locals-say", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("disconnected", console.error.bind(console, "connection closed:"));
db.once("open", function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
  seed();
});

async function seed() {
  await seedFeatures();
  await seedReviews();
  mongoose.disconnect();
}

function seedFeatures() {
  return fs.readFileAsync("./database/seed-data/locals-say-features.json")
    .then((data) => JSON.parse(data))
    .then((data) => data.filter((item) => item.pathData)) // remove after addressing special case
    .then((data) => {
      console.log("\n\nseeding features:\n");
      let features = [];
      data.forEach((item) => {
        console.log(`creating '${item.text}' feature object`);
        let feature = new FeatureModel(item);
        feature.helpfulPercent = Math.floor(Math.random() * 50) + 50;
        features.push(feature);
      });
      return FeatureModel.insertMany(features);
    })
    .catch((err) => console.log(err));
}

function seedReviews() {
  const reviewCount = ran(40, 15);
  const reviewType = [ "Community", "Dog Owners", "Parents", "Commute" ];
  return fs.readFileAsync("./database/seed-data/inspirational-reviews.json")
    .then((data) => JSON.parse(data))
    .then((data) => {
      console.log("\n\nseeding reviews:\n");
      let reviews = [];
      const jump = Math.floor(data.length / reviewCount)
      for (let i = 1; i <= reviewCount; i++) {
        let index = i * jump - jump, name = shortenName(data[index].from);
        console.log(`creating '${name}' review object`);
        let review = new ReviewModel({
          name: name,
          content: data[index].text,
          reviewType: reviewType[ran(4)],
          likes: ran(30, 15)
        });
        reviews.push(review);
      }
      return ReviewModel.insertMany(reviews);
    })
    .catch((err) => console.log(err));

    function ran(e, s = 0) {
      return Math.floor(Math.random() * e) + s;
    }

    function shortenName(name) {
      if (name === 'Chinese Proverb') {
        return 'Proverb';
      } else {
        let space = name.indexOf(' ');
        return space === -1 ? name : `${name.substring(0, space)} ${name[space + 1]}`;
      }
    }
}
