# Portofolio Edo Cholisaputra

Website statis sederhana untuk portofolio siswa SMK, dibuat dengan HTML, CSS, dan JavaScript tanpa framework atau layanan eksternal. Warna biru, putih, dan garis diagonalnya terinspirasi dari CV yang kamu kirim.

## Buka dan edit di VS Code

1. Ekstrak folder proyek, lalu buka folder `edo-portfolio` di VS Code.
2. Untuk melihat situs, buka `index.html` dengan ekstensi **Live Server**. Alternatifnya, jalankan `python -m http.server 8000` dari terminal di folder ini, lalu buka `http://localhost:8000`.
3. Ubah teks di `index.html` sesuai pengalaman dan informasi yang benar.
4. Ubah warna atau tata letak di `styles.css`.

## Sebelum dipublikasikan

- Nama lomba dan keterangan pengalaman diselaraskan dengan PDF yang kamu kirim. Sebelum dipublikasikan, cek kembali ejaan nama penyelenggara serta detail kegiatan pada sertifikat.
- Tiga gambar sertifikat dari halaman kedua PDF sudah dipasang langsung ke halaman Sertifikat dan tersimpan di `assets/sertifikat/`. Sertifikat ditampilkan langsung dari HTML, jadi tetap muncul meski JavaScript tidak aktif.
- Email tidak ditampilkan secara default. Kalau ingin membagikan email publik, isi `publicEmail` di bagian atas `script.js`. Nomor HP sengaja tidak dimasukkan ke versi ini.
- Tinjau lagi setiap klaim keahlian agar sesuai dengan yang benar-benar pernah dipelajari. Hindari mengunggah nomor identitas, alamat rumah, atau informasi pribadi lain ke repositori publik.
- Foto profil di `assets/edo-profile.png` diambil dari CV yang kamu kirim. Ganti file itu kalau ingin memakai foto lain atau tidak ingin menampilkan foto.

## Menambahkan sertifikat lain

1. Simpan gambar/PDF yang boleh dibagikan di `assets/sertifikat/`.
2. Salin salah satu blok kartu sertifikat di bagian `#sertifikat` pada `index.html`.
3. Ganti nama file gambar, judul, alt text, penyelenggara, dan tanggalnya.
4. Simpan dan muat ulang situs. Nomor HP dan data identitas sensitif sebaiknya tidak dicantumkan pada dokumen publik.

Tiga sertifikat yang sudah disertakan adalah Waskita Manunggal Siber TA 2026, Steven Capture the Flag (CTF) Tingkat Nasional 2026, dan POLRI CTF / eSports Kapolri Cup 2026.

## Publikasikan dengan GitHub Pages

1. Buat repositori baru di GitHub, misalnya `edo-portfolio`.
2. Buka terminal VS Code di folder proyek, lalu jalankan:

```bash
git init -b main
git add .
git commit -m "Buat portofolio Edo"
git remote add origin https://github.com/USERNAME/edo-portfolio.git
git push -u origin main
```

Ganti `USERNAME` dengan nama akun GitHub-mu. Jika Git meminta identitas, atur nama dan email Git di komputermu sendiri.

3. Di GitHub, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Tunggu proses selesai. URL situs akan terlihat di halaman GitHub Pages pada repositori.

Situs ini tidak memakai backend, package tambahan, font CDN, atau gambar eksternal; file bisa langsung di-host sebagai GitHub Pages.
