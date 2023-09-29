# [4/5] Exercise Tracker

**SELAMAT!** kamu sudah berhasil menyelesaikan project ketiga [URL Shortener Microservice](https://github.com/dipintoo/freeCodeCamp_Url-Shortner/tree/main). Sekarang kita lanjut ke project keempat dari lima project yang harus kamu selesaikan dan lolos test untuk bisa meraih sertifikasi [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) dari freeCodeCamp!.  

Kamu akan membangun sebuah API Node.js menggunakan MongoDB dan [Mongoose](https://www.npmjs.com/package/mongoose) untuk melacak aktivitas latihan/olahraga. Mongoose memudahkan kamu dalam berinteraksi dengan database MongoDB menggunakan JavaScript. Dengan mendefinisikan model, kamu dapat melakukan operasi-operasi seperti menyimpan, mencari, memperbarui, atau menghapus dokumen dalam collection (tabel).  

API kamu akan melewati serangkaian pengujian, termasuk membuat pengguna baru dengan permintaan POST ke /api/users, mendapatkan daftar semua pengguna dengan permintaan GET ke /api/users, menambahkan latihan dengan permintaan POST ke /api/users/:_id/exercises, dan mengambil catatan latihan lengkap dari pengguna mana pun dengan permintaan GET ke /api/users/:_id/logs.

## Contoh Project

Kamu bisa melihat contoh project URL Shortener Microservice dari freeCodeCamp di https://exercise-tracker.freecodecamp.rocks/

## Persiapan

- Gunakan [Project Awal Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker) dari freeCodeCamp ini sebagai template.
- Setelah muncul jendela ***Import from Github***, kamu bisa klik saja tombol `Import from GitHub`.
- Selanjutnya akan muncul jendela ***.replit***, kamu pilih `Use run command` lalu klik `Done`.
- Pada sidebar sebelah kiri, kamu akan melihat semua file yang berhasil kamu import tadi. Pilih `index.js` lalu kerjakan project kamu di dalamnya.
- Kamu perlu membuat database di [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-id_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624350&adgroup=115749709863&cq_cmp=12212624350&gad=1&gclid=CjwKCAjwyNSoBhA9EiwA5aYlbxDtiafSQz_y-aASOMvfEex17WZwi4Mf1C37WvSWD7rKc5QG0zQZvhoCu_oQAvD_BwE) terlebih dahulu. Kamu bisa lihat tutorial singkat membuat database MongoDB di [Youtube Short](https://www.youtube.com/shorts/pIHvoXkwmq4) ini.
- Sekarang saatnya menghubungkan database ke project kamu. Pada dashboard MongoDB kamu di bagian sidebar pilih `Database` lalu klik tombol `Connect`. Pilih opsi `Connect your application` lalu copy URL yang diberikan. Kembali ke replit dan cari Tools bernama ***Secret*** lalu jalankan. klik tombol `New Secret` dan isi ***Key*** dengan nama yang kamu inginkan serta isi ***Value*** dengan URL yang diberikan MongoDB tadi. Ganti ***<password>*** dengan password MongoDB yang kamu buat sebelumnya, lalu klik tombol `Add Secret`.
- Kamu juga perlu menginstall package ***mongodb*** dan ***mongoose*** menggunakan ***npm*** dengan cara mengetikkan `npm install mongodb mongoose` pada ***Shell*** di replit. Jangan lupa ***require*** package mongoose di project kamu dan menginisialisasi koneksi ke database dengan ***Key*** yang kamu buat sebelumnya. Untuk caranya bisa kamu dapatkan dalam course [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) yang diberikan freeCodeCamp sebelum mulai membuat project.  
- Klik tombol `Run` untuk menjalankan codingan kamu serta membuka jendela ***Webview***.
- Gunakan Url pada jendela ***Webview*** untuk mengisi ***Solution Link*** sebagai jawaban dari tantangan project ini dan pastikan semua syarat testing terpenuhi.
- Buatlah repository Github lalu gunakan Url-nya untuk mengisi ***GitHub Link*** supaya codingan kamu bisa tampil di publik.

## Testing

Kamu bisa melakukan testing langsung di [Exercise Tracker Testing](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker).  


### Selamat ngoding! 💻 🧠
