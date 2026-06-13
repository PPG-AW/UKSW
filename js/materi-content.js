/**
 * KONTEN MATERI PEMBELAJARAN
 * Simpangan Rata-Rata Data Tunggal
 */

const MATERI_CONTENT = {

    // ===== MATERI PRASYARAT (untuk Level 1) =====
    prasyarat: {
        judul: 'Materi Prasyarat',
        subjudul: 'Konsep dasar sebelum belajar Simpangan Rata-Rata',
        sections: [
            {
                judul: 'Apa itu Nilai Mutlak?',
                konten: `
                    <p>Nilai mutlak adalah <strong>jarak suatu bilangan dari nol</strong>
                    pada garis bilangan. Karena jarak selalu positif, nilai mutlak
                    juga selalu bernilai positif.</p>

                    <div class="example-box">
                        <strong>Notasi:</strong> Ditulis dengan dua garis tegak: |x|
                    </div>

                    <p><strong>Contoh:</strong></p>
                    <ul>
                        <li>|5| = 5 (karena 5 berjarak 5 dari nol)</li>
                        <li>|-5| = 5 (karena -5 juga berjarak 5 dari nol)</li>
                        <li>|0| = 0</li>
                        <li>|-12| = 12</li>
                    </ul>

                    <div class="alert alert-info">
                        <strong>Ingat:</strong> Tanda minus selalu dibuang dalam nilai mutlak.
                    </div>
                `
            },
            {
                judul: 'Operasi Bilangan Negatif',
                konten: `
                    <p>Saat menghitung selisih (langkah S dalam R-S-M-J-B),
                    kita akan sering mendapat hasil negatif. Pahami operasi
                    pengurangan berikut:</p>

                    <p><strong>Contoh pengurangan:</strong></p>
                    <ul>
                        <li>4 - 9 = -5 (karena 4 lebih kecil dari 9)</li>
                        <li>7 - 9 = -2</li>
                        <li>11 - 9 = +2</li>
                        <li>15 - 9 = +6</li>
                    </ul>

                    <p><strong>Setelah dimutlakkan:</strong></p>
                    <ul>
                        <li>|-5| = 5</li>
                        <li>|-2| = 2</li>
                        <li>|+2| = 2</li>
                        <li>|+6| = 6</li>
                    </ul>

                    <div class="alert alert-success">
                        <strong>Tip:</strong> Apa pun selisihnya (positif atau negatif),
                        setelah dimutlakkan akan jadi positif.
                    </div>
                `
            },
            {
                judul: 'Mengingat Konsep Rata-Rata',
                konten: `
                    <p>Sebelum belajar simpangan rata-rata, pastikan Anda ingat
                    cara menghitung rata-rata (mean):</p>

                    <div class="formula-box">
                        Rata-rata = Jumlah seluruh data &divide; Banyak data
                    </div>

                    <p><strong>Contoh:</strong></p>
                    <p>Data penjualan 5 hari: 6, 8, 10, 12, 14 (juta rupiah)</p>

                    <div class="calculation-box">
                        <p>Jumlah = 6 + 8 + 10 + 12 + 14 = 50</p>
                        <p>Banyak data = 5</p>
                        <p><strong>Rata-rata = 50 &divide; 5 = 10 juta</strong></p>
                    </div>
                `
            }
        ]
    },

    // ===== PENGERTIAN =====
    pengertian: {
        judul: 'Pengertian Simpangan Rata-Rata',
        subjudul: 'Mengapa kita butuh ukuran ini?',
        konten: `
            <div class="hero-quote">
                Simpangan rata-rata adalah <strong>rata-rata dari jarak setiap data
                terhadap nilai rata-ratanya</strong>.
            </div>

            <p>Dalam bisnis retail, simpangan rata-rata digunakan untuk mengukur
            <strong>seberapa konsisten</strong> penjualan harian dibandingkan
            rata-ratanya.</p>

            <h3 class="section-subtitle">Mengapa Rata-Rata Saja Tidak Cukup?</h3>

            <div class="comparison">
                <div class="comparison-item">
                    <div class="comparison-label">Toko A</div>
                    <div class="comparison-data">10, 10, 10, 10, 10</div>
                    <div class="comparison-mean">Rata-rata = 10</div>
                    <div class="comparison-status status-stabil">STABIL</div>
                </div>
                <div class="comparison-item">
                    <div class="comparison-label">Toko B</div>
                    <div class="comparison-data">6, 14, 2, 18, 10</div>
                    <div class="comparison-mean">Rata-rata = 10</div>
                    <div class="comparison-status status-tidak-stabil">TIDAK STABIL</div>
                </div>
            </div>

            <p><strong>Rata-rata yang sama</strong> tidak menjamin performa yang sama.
            Kita butuh alat ukur penyebaran data. Itulah <strong>Simpangan Rata-Rata</strong>.</p>

            <h3 class="section-subtitle">Interpretasi Simpangan Rata-Rata</h3>

            <div class="interpretation-grid">
                <div class="interpretation-card success">
                    <div class="interp-title">SR Kecil</div>
                    <div class="interp-label">= KONSISTEN</div>
                    <p>Data mengumpul dekat rata-rata. Seperti toko yang penjualannya
                    stabil setiap hari. Bisa diandalkan.</p>
                </div>
                <div class="interpretation-card danger">
                    <div class="interp-title">SR Besar</div>
                    <div class="interp-label">= TIDAK KONSISTEN</div>
                    <p>Data menyebar jauh dari rata-rata. Seperti toko yang penjualannya
                    naik-turun drastis. Sulit diprediksi.</p>
                </div>
            </div>
        `
    },

    // ===== RUMUS =====
    rumus: {
        judul: 'Rumus Simpangan Rata-Rata',
        subjudul: 'Formula dasar yang harus dipahami',
        konten: `
            <div class="rumus-utama">
                <div class="rumus-text">
                    SR = <span class="frac">
                        <span class="num">&Sigma; |x<sub>i</sub> - x&#772;|</span>
                        <span class="denom">n</span>
                    </span>
                </div>
            </div>

            <h3 class="section-subtitle">Penjelasan Simbol</h3>

            <div class="simbol-grid">
                <div class="simbol-card">
                    <div class="simbol-char">SR</div>
                    <div class="simbol-desc">Simpangan Rata-rata</div>
                </div>
                <div class="simbol-card">
                    <div class="simbol-char">x<sub>i</sub></div>
                    <div class="simbol-desc">Data ke-i</div>
                </div>
                <div class="simbol-card">
                    <div class="simbol-char">x&#772;</div>
                    <div class="simbol-desc">Rata-rata data</div>
                </div>
                <div class="simbol-card">
                    <div class="simbol-char">| ... |</div>
                    <div class="simbol-desc">Nilai Mutlak</div>
                </div>
                <div class="simbol-card">
                    <div class="simbol-char">&Sigma;</div>
                    <div class="simbol-desc">Sigma (Jumlah)</div>
                </div>
                <div class="simbol-card">
                    <div class="simbol-char">n</div>
                    <div class="simbol-desc">Banyak data</div>
                </div>
            </div>

            <div class="alert alert-info">
                <strong>Mengapa pakai nilai mutlak?</strong><br>
                Nilai mutlak membuat semua selisih menjadi positif. Tanpa itu,
                selisih positif dan negatif akan saling menghilangkan, dan hasilnya
                tidak akan mencerminkan jarak sebenarnya.
            </div>
        `
    },

    // ===== LANGKAH RSMJB =====
    langkah: {
        judul: '5 Langkah Menghitung SR',
        subjudul: 'Ingat: R - S - M - J - B',
        konten: `
            <div class="mnemonic-box">
                <div class="mnemonic-title">Cara Mengingat</div>
                <div class="mnemonic-letters">
                    <span class="letter">R</span>
                    <span class="dash">&ndash;</span>
                    <span class="letter">S</span>
                    <span class="dash">&ndash;</span>
                    <span class="letter">M</span>
                    <span class="dash">&ndash;</span>
                    <span class="letter">J</span>
                    <span class="dash">&ndash;</span>
                    <span class="letter">B</span>
                </div>
                <div class="mnemonic-words">
                    Rata-rata &middot; Selisih &middot; Mutlak &middot; Jumlah &middot; Bagi
                </div>
            </div>

            <div class="step-list">
                <div class="step-item">
                    <div class="step-num">1</div>
                    <div class="step-body">
                        <div class="step-letter">R - RATA-RATA</div>
                        <div class="step-desc">
                            Jumlahkan semua data, lalu bagi dengan banyak data.
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-num">2</div>
                    <div class="step-body">
                        <div class="step-letter">S - SELISIH</div>
                        <div class="step-desc">
                            Kurangkan setiap data dengan rata-rata. Hasilnya bisa
                            positif atau negatif.
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-num">3</div>
                    <div class="step-body">
                        <div class="step-letter">M - MUTLAK</div>
                        <div class="step-desc">
                            Ubah semua selisih menjadi positif menggunakan nilai mutlak.
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-num">4</div>
                    <div class="step-body">
                        <div class="step-letter">J - JUMLAH</div>
                        <div class="step-desc">
                            Tambahkan semua nilai mutlak yang sudah didapat.
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <div class="step-num">5</div>
                    <div class="step-body">
                        <div class="step-letter">B - BAGI</div>
                        <div class="step-desc">
                            Bagi jumlah nilai mutlak dengan banyak data (n).
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // ===== CONTOH TOKO MAJU (dengan animasi) =====
    contoh: {
        judul: 'Contoh: Toko Maju',
        subjudul: 'Ikuti langkah-langkahnya dengan animasi',
        // Konten dirender khusus dengan animasi step-by-step
        data: [4, 7, 8, 11, 15]
    },

    // ===== APLIKASI =====
    aplikasi: {
        judul: 'Aplikasi Simpangan Rata-Rata',
        subjudul: 'Di berbagai bidang kehidupan',
        konten: `
            <p>Simpangan rata-rata digunakan di banyak bidang untuk mengukur
            konsistensi data:</p>

            <div class="aplikasi-grid">
                <div class="aplikasi-card">
                    <div class="aplikasi-title">RETAIL</div>
                    <div class="aplikasi-desc">Konsistensi penjualan harian antar cabang toko</div>
                </div>
                <div class="aplikasi-card">
                    <div class="aplikasi-title">KEUANGAN</div>
                    <div class="aplikasi-desc">Stabilitas nilai investasi atau pendapatan</div>
                </div>
                <div class="aplikasi-card">
                    <div class="aplikasi-title">MANUFAKTUR</div>
                    <div class="aplikasi-desc">Kualitas produk dan keseragaman hasil produksi</div>
                </div>
                <div class="aplikasi-card">
                    <div class="aplikasi-title">SDM</div>
                    <div class="aplikasi-desc">Konsistensi kinerja karyawan</div>
                </div>
                <div class="aplikasi-card">
                    <div class="aplikasi-title">LOGISTIK</div>
                    <div class="aplikasi-desc">Ketepatan waktu pengiriman barang</div>
                </div>
            </div>

            <div class="alert alert-info mt-md">
                <strong>Sebagai siswa jurusan Pemasaran,</strong> Anda akan sering
                menggunakan simpangan rata-rata untuk menganalisis konsistensi
                penjualan, kinerja tim sales, dan stabilitas pertumbuhan bisnis.
            </div>
        `
    }
};