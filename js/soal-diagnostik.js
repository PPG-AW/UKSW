/**
 * BANK SOAL ASESMEN DIAGNOSTIK
 * 5 soal untuk menentukan level siswa (1/2/3)
 * Total skor: 100
 */

const SOAL_DIAGNOSTIK = [
    {
        id: 1,
        topik: 'Nilai Mutlak',
        bobot: 20,
        pertanyaan: 'Hitunglah nilai dari |-7| dan |4|.',
        pilihan: [
            { label: 'A', teks: '-7 dan 4' },
            { label: 'B', teks: '7 dan 4' },
            { label: 'C', teks: '7 dan -4' },
            { label: 'D', teks: '-7 dan -4' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Nilai mutlak selalu positif. |-7| = 7 dan |4| = 4.'
    },
    {
        id: 2,
        topik: 'Operasi Bilangan Negatif',
        bobot: 20,
        pertanyaan: 'Hasil dari 5 - 8 = ... dan |5 - 8| = ...',
        pilihan: [
            { label: 'A', teks: '3 dan 3' },
            { label: 'B', teks: '-3 dan 3' },
            { label: 'C', teks: '-3 dan -3' },
            { label: 'D', teks: '3 dan -3' }
        ],
        jawabanBenar: 'B',
        pembahasan: '5 - 8 = -3, sehingga |5 - 8| = |-3| = 3.'
    },
    {
        id: 3,
        topik: 'Konsep Rata-Rata',
        bobot: 20,
        pertanyaan: 'Penjualan harian sebuah toko selama 5 hari (dalam juta rupiah) adalah: 6, 8, 10, 12, 14. Berapakah rata-rata penjualan toko tersebut?',
        pilihan: [
            { label: 'A', teks: '8 juta' },
            { label: 'B', teks: '10 juta' },
            { label: 'C', teks: '12 juta' },
            { label: 'D', teks: '50 juta' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Rata-rata = (6+8+10+12+14)/5 = 50/5 = 10 juta.'
    },
    {
        id: 4,
        topik: 'Pemahaman Penyebaran Data',
        bobot: 20,
        pertanyaan: 'Dua toko sama-sama memiliki rata-rata penjualan harian 10 juta. Toko A: 10, 10, 10, 10, 10. Toko B: 5, 15, 8, 12, 10. Toko manakah yang penjualannya lebih konsisten?',
        pilihan: [
            { label: 'A', teks: 'Toko A, karena semua datanya sama persis dengan rata-rata.' },
            { label: 'B', teks: 'Toko B, karena datanya bervariasi.' },
            { label: 'C', teks: 'Keduanya sama konsisten karena rata-ratanya sama.' },
            { label: 'D', teks: 'Tidak bisa ditentukan tanpa rumus.' }
        ],
        jawabanBenar: 'A',
        pembahasan: 'Toko A lebih konsisten karena semua data tepat di rata-rata, sedangkan Toko B berfluktuasi jauh dari rata-rata.'
    },
    {
        id: 5,
        topik: 'Aplikasi Konteks Bisnis',
        bobot: 20,
        pertanyaan: 'Sebagai calon pelaku bisnis di bidang Pemasaran, jika kalian ingin menilai konsistensi penjualan sebuah cabang toko, informasi apa yang paling penting untuk diperhatikan?',
        pilihan: [
            { label: 'A', teks: 'Hanya rata-rata penjualan harian.' },
            { label: 'B', teks: 'Hanya total penjualan dalam sebulan.' },
            { label: 'C', teks: 'Rata-rata penjualan dan seberapa jauh data menyebar dari rata-rata.' },
            { label: 'D', teks: 'Hanya penjualan tertinggi dalam satu minggu.' }
        ],
        jawabanBenar: 'C',
        pembahasan: 'Rata-rata saja tidak cukup. Kita juga perlu mengukur penyebaran data untuk menilai konsistensi penjualan.'
    }
];

/**
 * Hitung skor berdasarkan jawaban siswa
 */
function hitungSkorDiagnostik(jawabanSiswa) {
    let totalSkor = 0;
    const detailJawaban = [];

    SOAL_DIAGNOSTIK.forEach((soal, i) => {
        const jawabanUser = jawabanSiswa[i];
        const benar = jawabanUser === soal.jawabanBenar;
        const skorSoal = benar ? soal.bobot : 0;
        totalSkor += skorSoal;

        detailJawaban.push({
            soalId: soal.id,
            topik: soal.topik,
            jawabanUser: jawabanUser || '-',
            jawabanBenar: soal.jawabanBenar,
            benar: benar,
            skor: skorSoal
        });
    });

    return {
        totalSkor: totalSkor,
        detail: detailJawaban
    };
}

/**
 * Tentukan level berdasarkan skor
 */
function tentukanLevel(skor) {
    if (skor <= 40) return 1;
    if (skor <= 70) return 2;
    return 3;
}

/**
 * Get deskripsi level
 */
function getLevelInfo(level) {
    const info = {
        1: {
            label: 'Level 1',
            judul: 'Perlu Penguatan Prasyarat',
            deskripsi: 'Mulai dari materi prasyarat (nilai mutlak, operasi bilangan negatif), kemudian lanjut ke materi utama.',
            warna: 'level-1',
            soalYouDo: 'Soal 1 (Pemula) dengan template terbimbing'
        },
        2: {
            label: 'Level 2',
            judul: 'Siap Materi Utama',
            deskripsi: 'Langsung ke materi utama (konsep, rumus, langkah perhitungan).',
            warna: 'level-2',
            soalYouDo: 'Soal 1 dan Soal 2 (Menengah)'
        },
        3: {
            label: 'Level 3',
            judul: 'Siap Aplikasi Lanjutan',
            deskripsi: 'Materi utama beserta eksplorasi lanjutan dan studi kasus aplikatif.',
            warna: 'level-3',
            soalYouDo: 'Soal 3 (Tantangan) dan dapat melanjutkan ke pengayaan'
        }
    };
    return info[level];
}