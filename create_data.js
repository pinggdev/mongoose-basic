const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Rasanya manis",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil simpan buah apel kedalam database");
//   }
// });

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Buah yang terbaik",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "Asem rasanya",
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 6,
  review: "Manis dan menyegarkan",
});

Fruit.insertMany([kiwi, jeruk, pisang], function (err) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    console.log("Berhasil simpan buah kedalam database");
  }
});
