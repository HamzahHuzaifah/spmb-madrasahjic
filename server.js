const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Agar bisa menerima data JSON (misal dari form React)
app.use(express.urlencoded({ extended: true }));

// Test Route sederhana
app.get('/', (req, res) => {
    res.send('Server SPMB JIC sudah berjalan dengan baik!');
});

// Menjalankan Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});