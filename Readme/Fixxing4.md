# Catatan Perbaikan Ke-4 (Refactoring Opsi A & Opsi B)

Dokumen ini mencatat seluruh rangkaian refactoring dan perbaikan yang telah kita lakukan pada sesi kali ini untuk memastikan kode *front-end* menjadi lebih efisien, modular, dan siap untuk tahap *deployment*.

## 1. Implementasi Opsi A: Refactoring Terms & Conditions (Syarat & Ketentuan)
- **Pembuatan Komponen**: Memisahkan kartu *Terms & Conditions* ke dalam satu komponen terpusat di `frontend/views/partials/terms-card.ejs`.
- **Penggunaan Props**: Menambahkan logika dinamis menggunakan *props* `type` (`reguler`, `ulang`, `beasiswa`) untuk merender daftar syarat yang berbeda.
- **Pembersihan Kode**: Menghapus puluhan baris HTML statis yang berulang pada `pendaftaran.ejs`, `pendaftaran-ulang.ejs`, dan `beasiswa.ejs`, lalu menggantinya dengan pemanggilan `<%- include('../partials/terms-card', { type: '...' }) %>`.

## 2. Implementasi Opsi B: Refactoring Form Data Santri
- **Pembaruan Komponen**: Memodifikasi file `frontend/views/partials/form-data-santri.ejs` agar menjadi lebih fleksibel dan bisa digunakan di banyak tempat sekaligus.
- **Dukungan Layout & ID**: 
  - Menambahkan *props* `layout` untuk mendukung variasi tata letak seperti `flat-grid`, `stacked`, dan `flex-rows`.
  - Menambahkan *props* `idPrefix` (misalnya `m_`) untuk mencegah konflik ID ketika digunakan berulang kali pada *modal* edit dan tambah dalam satu halaman.
- **Penerapan pada Halaman Admin**:
  - Memodifikasi modal "Edit Santri", "Tambah Santri Baru", dan "Tambah Beasiswa" pada `santri.ejs` untuk menggunakan komponen `form-data-santri` dengan tata letak grid.
  - Memodifikasi modal pada `santri-daftar-ulang.ejs` untuk menggunakan komponen `form-data-santri` dengan layout `flex-rows` pada mode edit dan layout `flat-grid` pada mode tambah.

## 3. Perbaikan Bug JavaScript
- Memperbaiki ketidakcocokan atribut ID antara komponen baru dan skrip JavaScript pada `frontend/public/js/santri.js` (memperbarui `m_pendidikan` menjadi `m_tingkatPendidikan`) sehingga data modal *Edit* dapat ditarik (*populate*) dan ditampilkan dengan sempurna.

## 4. Evaluasi Menyeluruh Folder `views`
- Melakukan penyisiran dan *code review* pada halaman lain seperti `tagihan.ejs`, `input-transaksi.ejs`, `tunggakan.ejs`, dan halaman laporan.
- **Kesimpulan**: Struktur pada halaman-halaman tersebut sudah cukup solid dan mandiri. Abstraksi komponen secara agresif pada halaman yang sangat spesifik (seperti input transaksi) berpotensi memicu *bug* tak terduga menjelang minggu perilisan, sehingga pendekatan yang paling stabil dan aman dipertahankan.

## 5. Penyesuaian UI & Branding (Update Manual)
- Merubah teks identitas pada `header.ejs` (dari "Admin SPMB" menjadi "Admin MJIC").
- Merubah identitas sidebar pada `sidebar.ejs` (menjadi "Keuangan Madrasah JIC" dengan inisial "MJIC").
- Menyesuaikan proporsi logo (`width: 80px;`) pada `style.css`.

Aplikasi telah teruji jauh lebih bersih tanpa duplikasi kode yang berlebihan, dan secara fungsional telah siap dan stabil untuk proses *deployment*!
