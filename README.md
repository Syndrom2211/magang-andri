# Admin Dashboard Yukmari Project

## Prasyarat
Pastikan Anda memiliki prasyarat berikut sebelum melanjutkan:
- Node.js (versi terbaru)
- npm

## Langkah-langkah Download dan Install

1. **Clone Repository**
   ```bash
   git clone https://github.com/Syndrom2211/magang-andri.git
   cd magang-andri
   ```

2. **Install Dependencies**
   Menggunakan npm:
   ```bash
   npm install
   ```
3. **Install Tailwindcss**
   ```bash
   npm install @tailwindcss
   ```
## Cara Menggunakan

1. **Menjalankan Development Server**
   Untuk menjalankan server pengembangan dengan hot module replacement (HMR):
   ```bash
   npm run dev
   ```
2. **Untuk Produksi**
   Untuk membangun aplikasi untuk produksi:
   ```bash
   npm run build
   ```
3. **Menjalankan Preview**
   Untuk melihat pratinjau build produksi secara lokal:
   ```bash
   npm run serve
   ```
## Struktur Folder

Berikut adalah struktur folder dari repository ini:

```
/magang-andri
├── /node_modules                # Direktori untuk dependencies
├── /public                      # Direktori untuk aset publik (misal: index.html)
├── /src                         # Direktori untuk kode sumber proyek
│   ├── /assets                  # Aset-aset proyek (gambar, css, dll)
│   ├── /components              # Komponen-komponen React
│   ├── /context                 # Konfigurasi Search global
│   ├── /pages                   # Page untuk Router React
│   ├── App.tsx                  # File utama aplikasi React
│   ├── index.css                # style global here
│   ├── index.tsx                # Entry point aplikasi
│   ├── react-table-conf.d.ts    # Deklarasi untuk react table
│   └── vite-env.d.ts            # Deklarasi tipe untuk Vite
├── .gitignore                   # File untuk mengabaikan file/direktori tertentu dari git
├── package.json                 # File konfigurasi npm/yarn
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Konfigurasi Vite
└── README.md                    # Panduan penggunaan proyek ini
```

## Cara Mengedit

1. **Mengedit Kode Sumber**
   - Buka proyek ini menggunakan editor kode favorit Anda (misalnya, VS Code).
   - Semua kode sumber dapat ditemukan di direktori `src/`.
   - untuk mengedit halaman login bisa ditemukan di direktori `src/components/`
   - untuk mengedit bagian halaman dashboard dapat ditemukan di direktori `src/components/admin/`
   - dan untuk mengatur routing bisa dilakukan di file `App.tsx`