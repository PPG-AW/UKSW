/**
 * GENERATOR SOAL
 * Menghasilkan soal Simpangan Rata-Rata secara acak
 */

const SoalGenerator = {

    /**
     * Generate soal dengan kompleksitas tertentu
     * @param {string} difficulty - 'easy', 'medium', 'hard'
     * @returns {object} soal
     */
    generate(difficulty = 'medium') {
        const config = {
            easy: { n: 5, min: 1, max: 10, decimal: false },
            medium: { n: 5, min: 1, max: 20, decimal: false },
            hard: { n: 6, min: 1, max: 30, decimal: false }
        };

        const cfg = config[difficulty] || config.medium;

        // Generate data acak dengan mean integer agar lebih mudah dihitung
        const data = this.generateDataWithIntegerMean(cfg.n, cfg.min, cfg.max);

        const mean = this.calculateMean(data);
        const selisih = data.map(x => x - mean);
        const mutlak = selisih.map(s => Math.abs(s));
        const jumlahMutlak = mutlak.reduce((a, b) => a + b, 0);
        const sr = jumlahMutlak / data.length;

        // Generate konteks pemasaran
        const konteks = this.randomKonteks();

        return {
            data: data,
            n: data.length,
            mean: mean,
            selisih: selisih,
            mutlak: mutlak,
            jumlahMutlak: jumlahMutlak,
            sr: Math.round(sr * 100) / 100,
            konteks: konteks,
            difficulty: difficulty
        };
    },

    /**
     * Generate data dengan mean yang merupakan integer
     */
    generateDataWithIntegerMean(n, min, max) {
        // Coba sampai dapat data dengan mean integer (max 50 percobaan)
        for (let attempt = 0; attempt < 50; attempt++) {
            const data = [];
            for (let i = 0; i < n; i++) {
                data.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
            const sum = data.reduce((a, b) => a + b, 0);
            if (sum % n === 0) {
                return data;
            }
        }

        // Fallback: bangun data manual dengan mean integer
        const mean = Math.floor(Math.random() * (max - min - 4)) + min + 2;
        const data = [mean - 2, mean - 1, mean, mean + 1, mean + 2];
        // Acak urutannya
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    },

    /**
     * Hitung rata-rata
     */
    calculateMean(data) {
        const sum = data.reduce((a, b) => a + b, 0);
        return sum / data.length;
    },

    /**
     * Konteks soal acak (relevan dengan pemasaran)
     */
    randomKonteks() {
        const konteksList = [
            {
                judul: 'Penjualan Harian Toko',
                deskripsi: 'Data penjualan harian sebuah toko retail (dalam juta rupiah):',
                satuan: 'juta',
                unit: 'hari'
            },
            {
                judul: 'Pengunjung Toko',
                deskripsi: 'Data jumlah pengunjung sebuah cabang toko (dalam puluhan orang):',
                satuan: '',
                unit: 'hari'
            },
            {
                judul: 'Kinerja Karyawan',
                deskripsi: 'Nilai kinerja karyawan toko retail dalam satu minggu:',
                satuan: '',
                unit: 'hari'
            },
            {
                judul: 'Transaksi Pelanggan',
                deskripsi: 'Jumlah transaksi pelanggan di kasir per jam (dalam puluhan):',
                satuan: '',
                unit: 'jam'
            },
            {
                judul: 'Stok Produk Terjual',
                deskripsi: 'Jumlah unit produk yang terjual per hari di toko:',
                satuan: 'unit',
                unit: 'hari'
            },
            {
                judul: 'Penjualan Tim Sales',
                deskripsi: 'Jumlah closing penjualan harian tim sales (dalam unit):',
                satuan: 'unit',
                unit: 'hari'
            }
        ];

        return konteksList[Math.floor(Math.random() * konteksList.length)];
    },

    /**
     * Cek jawaban siswa
     */
    cekJawaban(soal, jawaban) {
        const result = {
            mean: false,
            selisih: [],
            mutlak: [],
            jumlahMutlak: false,
            sr: false,
            totalBenar: 0,
            totalSoal: 0
        };

        // Cek mean
        if (jawaban.mean !== undefined && jawaban.mean !== null) {
            result.totalSoal++;
            if (Math.abs(parseFloat(jawaban.mean) - soal.mean) < 0.01) {
                result.mean = true;
                result.totalBenar++;
            }
        }

        // Cek selisih
        if (jawaban.selisih && Array.isArray(jawaban.selisih)) {
            jawaban.selisih.forEach((val, i) => {
                result.totalSoal++;
                if (val !== '' && Math.abs(parseFloat(val) - soal.selisih[i]) < 0.01) {
                    result.selisih[i] = true;
                    result.totalBenar++;
                } else {
                    result.selisih[i] = false;
                }
            });
        }

        // Cek mutlak
        if (jawaban.mutlak && Array.isArray(jawaban.mutlak)) {
            jawaban.mutlak.forEach((val, i) => {
                result.totalSoal++;
                if (val !== '' && Math.abs(parseFloat(val) - soal.mutlak[i]) < 0.01) {
                    result.mutlak[i] = true;
                    result.totalBenar++;
                } else {
                    result.mutlak[i] = false;
                }
            });
        }

        // Cek jumlah mutlak
        if (jawaban.jumlahMutlak !== undefined && jawaban.jumlahMutlak !== null) {
            result.totalSoal++;
            if (Math.abs(parseFloat(jawaban.jumlahMutlak) - soal.jumlahMutlak) < 0.01) {
                result.jumlahMutlak = true;
                result.totalBenar++;
            }
        }

        // Cek SR
        if (jawaban.sr !== undefined && jawaban.sr !== null) {
            result.totalSoal++;
            if (Math.abs(parseFloat(jawaban.sr) - soal.sr) < 0.01) {
                result.sr = true;
                result.totalBenar++;
            }
        }

        result.skor = result.totalSoal > 0
            ? Math.round((result.totalBenar / result.totalSoal) * 100)
            : 0;

        return result;
    }
};