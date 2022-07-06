const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
  name: "Duku",
  rating: 8,
  review: "Rasanya manis",
});

fruitDuku.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah duku kedalam database");
  }
});

const people = new People({
  name: "Angga",
  age: 24,
  favoriteFruit: fruitDuku,
});

people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil create angga relationship dengan duku");
  }
});
