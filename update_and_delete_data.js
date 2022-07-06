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

// Fruit.updateOne(
//   { _id: "62c2bf055c1e422acb438d96" },
//   {
//     name: "Nanas",
//   },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Berhasil update data mangga menjadi nanas kedalam database");
//     }
//   }
// );

Fruit.deleteOne({ _id: "62c1b7bb9ac367fcca2f956b" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil delete data nanas kedalam database");
  }
});

Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Nama nama buah setelah data didelete");
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
