const express = require('express'); // Mengimpor library Express.js untuk membangun aplikasi web
const app = express(); // Membuat instance aplikasi Express
const cors = require('cors'); // Mengimpor library CORS untuk mengatasi masalah lintas sumber (CORS)
require('dotenv').config(); // Mengimpor library dotenv untuk mengelola variabel lingkungan
const mongoose = require('mongoose'); // Mengimpor library mongoose untuk berinteraksi dengan MongoDB
const { Schema } = mongoose;

// Menghubungkan aplikasi dengan database MongoDB menggunakan URL dari variabel lingkungan (DB_URL)
mongoose.connect(process.env.DB_URL);

// Mendefinisikan skema Mongoose untuk pengguna
const UserSchema = new Schema({
  username: String,
});
const User = mongoose.model("User", UserSchema);

// Mendefinisikan skema Mongoose untuk latihan
const ExerciseSchema = new Schema({
  user_id: { type: String, required: true }, // ID pengguna terkait (wajib)
  description: String,
  duration: Number,
  date: Date,
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// Mengkonfigurasi middleware dan pengaturan Express
app.use(cors()); // Menggunakan middleware CORS
app.use(express.static('public')); // Menyajikan berkas statis dari direktori 'public'
app.use(express.urlencoded({ extended: true })); // Mem-parsing body permintaan HTTP dengan tipe 'application/x-www-form-urlencoded'

// Route untuk halaman beranda (mengirimkan berkas HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Route API: Mendapatkan daftar pengguna
app.get("/api/users", async (req, res) => {
  // Mencari semua pengguna dari database dan mengirimkan hanya ID dan username
  const users = await User.find({}).select("_id username");
  if (!users) {
    res.send("No users");
  } else {
    res.json(users);
  }
});

// Route API: Menambahkan pengguna baru
app.post("/api/users", async (req, res) => {
  // Mengambil data pengguna dari permintaan HTTP
  const userObj = new User({
    username: req.body.username
  });

  try {
    // Menyimpan pengguna baru ke database dan mengirimkan respons
    const user = await userObj.save()
    res.json(user)
  } catch (err) {
    console.log(err)
    res.send("There was an error saving the user")
  }
});

// Route API: Menambahkan latihan baru untuk pengguna
app.post("/api/users/:_id/exercises", async (req, res) => {
  const id = req.params._id;
  const { description, duration, date } = req.body

  try {
    // Mencari pengguna berdasarkan ID
    const user = await User.findById(id)
    if (!user) {
      res.send("Could not find user")
    } else {
      // Membuat objek latihan baru dan menyimpannya ke database
      const exerciseObj = new Exercise({
        user_id: user._id,
        description,
        duration,
        date: date ? new Date(date) : new Date()
      })
      const exercise = await exerciseObj.save()
      // Mengirimkan respons dengan detail latihan
      res.json({
        _id: user._id,
        username: user.username,
        description: exercise.description,
        duration: exercise.duration,
        date: new Date(exercise.date).toDateString()
      })
    }
  } catch (err) {
    console.log(err);
    res.send("There was an error saving the exercise")
  }
});

// Route API: Mendapatkan log latihan pengguna
app.get("/api/users/:_id/logs", async (req, res) => {
  const { from, to, limit } = req.query;
  const id = req.params._id;
  const user = await User.findById(id);
  if (!user) {
    res.send("Could not find user")
    return;
  }
  let dateObj = {}
  if (from) {
    dateObj["$gte"] = new Date(from)
  }
  if (to) {
    dateObj["$lte"] = new Date(to)
  }
  let filter = {
    user_id: id
  }
  if (from || to) {
    filter.date = dateObj;
  }

  // Mencari latihan berdasarkan kriteria tertentu dan mengirimkan log latihan
  const exercises = await Exercise.find(filter).limit(+limit ?? 500)

  const log = exercises.map(e => ({
    description: e.description,
    duration: e.duration,
    date: e.date.toDateString()
  }))

  // Mengirimkan respons berisi log latihan
  res.json({
    username: user.username,
    count: exercises.length,
    _id: user._id,
    log
  })
});

// Menjalankan server Express pada port yang ditentukan (atau port 3000 jika tidak ada variabel PORT)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
