/**
 * BANK SOAL ASESMEN FORMATIF
 * 10 soal untuk mengukur pencapaian tujuan pembelajaran
 * Total skor: 100
 */

const SOAL_FORMATIF = [
    {
        id: 1,
        topik: 'Pengertian SR',
        bobot: 5,
        level: 'C2',
        pertanyaan: 'Simpangan rata-rata adalah ...',
        pilihan: [
            { label: 'A', teks: 'Selisih antara data terbesar dan terkecil.' },
            { label: 'B', teks: 'Rata-rata dari jarak setiap data terhadap nilai rata-ratanya.' },
            { label: 'C', teks: 'Nilai tengah dari sekumpulan data setelah diurutkan.' },
            { label: 'D', teks: 'Nilai yang paling sering muncul dari sekumpulan data.' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'SR mengukur rata-rata jarak (absolut) setiap data terhadap mean.'
    },
    {
        id: 2,
        topik: 'Rumus SR',
        bobot: 5,
        level: 'C2',
        pertanyaan: 'Rumus yang tepat untuk simpangan rata-rata data tunggal adalah ...',
        pilihan: [
            { label: 'A', teks: 'SR = Σx / n' },
            { label: 'B', teks: 'SR = Σ(x - x̄) / n' },
            { label: 'C', teks: 'SR = Σ|x - x̄| / n' },
            { label: 'D', teks: 'SR = Σ|x - x̄|' }
        ],
        jawabanBenar: 'C',
        pembahasan: 'Rumus benar: SR = jumlah nilai mutlak selisih / banyak data.'
    },
    {
        id: 3,
        topik: 'Hitung Rata-rata',
        bobot: 10,
        level: 'C3',
        pertanyaan: 'Data jumlah pengunjung sebuah toko selama 5 hari: 12, 15, 18, 20, 25. Berapa rata-rata pengunjung harian toko tersebut?',
        pilihan: [
            { label: 'A', teks: '15' },
            { label: 'B', teks: '18' },
            { label: 'C', teks: '20' },
            { label: 'D', teks: '90' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Rata-rata = (12+15+18+20+25)/5 = 90/5 = 18.'
    },
    {
        id: 4,
        topik: 'Selisih & Mutlak',
        bobot: 10,
        level: 'C3',
        pertanyaan: 'Data: 4, 6, 8, 10 dengan rata-rata 7. Hasil nilai mutlak |xi - 7| yang BENAR adalah ...',
        pilihan: [
            { label: 'A', teks: '3, 1, 1, 3 (jumlah = 8)' },
            { label: 'B', teks: '-3, -1, 1, 3 (jumlah = 0)' },
            { label: 'C', teks: '3, 1, -1, -3 (jumlah = 0)' },
            { label: 'D', teks: '4, 6, 8, 10 (jumlah = 28)' }
        ],
        jawabanBenar: 'A',
        pembahasan: 'Selisih: -3, -1, +1, +3. Nilai mutlak: 3, 1, 1, 3. Jumlah = 8.'
    },
    {
        id: 5,
        topik: 'Hitung SR Lengkap',
        bobot: 15,
        level: 'C3',
        pertanyaan: 'Penjualan harian Toko Sejahtera (juta rupiah): 6, 8, 10, 12, 14. Berapa simpangan rata-ratanya?',
        pilihan: [
            { label: 'A', teks: '1,6 juta' },
            { label: 'B', teks: '2,4 juta' },
            { label: 'C', teks: '3,0 juta' },
            { label: 'D', teks: '4,0 juta' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'x̄=10. Mutlak: 4,2,0,2,4. Jumlah=12. SR = 12/5 = 2,4.'
    },
    {
        id: 6,
        topik: 'Hitung SR Data Baru',
        bobot: 15,
        level: 'C3',
        pertanyaan: 'Nilai kinerja 6 karyawan toko retail: 6, 8, 7, 9, 5, 7. Berapa simpangan rata-ratanya?',
        pilihan: [
            { label: 'A', teks: '0,5' },
            { label: 'B', teks: '1,0' },
            { label: 'C', teks: '1,5' },
            { label: 'D', teks: '2,0' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'x̄ = 42/6 = 7. Mutlak: 1,1,0,2,2,0. Jumlah = 6. SR = 6/6 = 1.'
    },
    {
        id: 7,
        topik: 'Interpretasi SR',
        bobot: 10,
        level: 'C2',
        pertanyaan: 'Cabang A memiliki SR = 1,5 juta dan Cabang B memiliki SR = 4,8 juta. Pernyataan yang tepat adalah ...',
        pilihan: [
            { label: 'A', teks: 'Cabang A lebih konsisten karena SR-nya lebih kecil.' },
            { label: 'B', teks: 'Cabang B lebih konsisten karena SR-nya lebih besar.' },
            { label: 'C', teks: 'Keduanya sama konsisten.' },
            { label: 'D', teks: 'Tidak bisa ditentukan tanpa mengetahui rata-ratanya.' }
        ],
        jawabanBenar: 'A',
        pembahasan: 'SR kecil = data mengumpul dekat rata-rata = lebih konsisten.'
    },
    {
        id: 8,
        topik: 'Aplikasi Pemasaran',
        bobot: 10,
        level: 'C3',
        pertanyaan: 'Toko retail ingin merekrut karyawan dengan kinerja stabil. Kandidat A: x̄=8, SR=0,5. Kandidat B: x̄=8, SR=2,5. Kandidat mana yang sebaiknya direkrut?',
        pilihan: [
            { label: 'A', teks: 'Kandidat B, karena SR-nya besar.' },
            { label: 'B', teks: 'Kandidat A, karena rata-rata sama tetapi kinerjanya lebih konsisten (SR kecil).' },
            { label: 'C', teks: 'Keduanya sama bagus karena rata-ratanya sama.' },
            { label: 'D', teks: 'Kandidat B, karena lebih dinamis.' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Kandidat A lebih konsisten, lebih bisa diandalkan untuk pekerjaan stabil.'
    },
    {
        id: 9,
        topik: 'Perbandingan Dua Data',
        bobot: 10,
        level: 'C4',
        pertanyaan: 'Cabang Maju: 8,10,9,11,12. Cabang Sentosa: 5,15,8,14,8. Cabang mana lebih konsisten?',
        pilihan: [
            { label: 'A', teks: 'Cabang Maju, karena SR = 1,2 (lebih kecil)' },
            { label: 'B', teks: 'Cabang Sentosa, karena SR = 1,2 (lebih kecil)' },
            { label: 'C', teks: 'Cabang Maju, karena SR = 3,2 (lebih besar)' },
            { label: 'D', teks: 'Keduanya sama konsisten.' }
        ],
        jawabanBenar: 'A',
        pembahasan: 'Maju: SR=6/5=1,2. Sentosa: SR=18/5=3,6. Maju lebih konsisten.'
    },
    {
        id: 10,
        topik: 'Keputusan Bisnis',
        bobot: 10,
        level: 'C4',
        pertanyaan: 'Cabang X: x̄=70, SR=2,5. Cabang Y: x̄=70, SR=12. Cabang mana yang perlu dievaluasi dan mengapa?',
        pilihan: [
            { label: 'A', teks: 'Cabang X, karena penjualannya selalu sama.' },
            { label: 'B', teks: 'Cabang Y, karena rata-ratanya sama dengan Cabang X.' },
            { label: 'C', teks: 'Cabang Y, karena SR-nya jauh lebih besar menunjukkan penjualan tidak konsisten.' },
            { label: 'D', teks: 'Tidak ada yang perlu dievaluasi.' }
        ],
        jawabanBenar: 'C',
        pembahasan: 'SR Y besar = penjualan fluktuatif = perlu evaluasi penyebab.'
    }
];

/**
 * Hitung skor formatif berdasarkan jawaban
 */
function hitungSkorFormatif(jawabanSiswa) {
    let totalSkor = 0;
    const detailJawaban = [];

    SOAL_FORMATIF.forEach((soal, i) => {
        const jawabanUser = jawabanSiswa[i];
        const benar = jawabanUser === soal.jawabanBenar;
        const skorSoal = benar ? soal.bobot : 0;
        totalSkor += skorSoal;

        detailJawaban.push({
            soalId: soal.id,
            topik: soal.topik,
            bobot: soal.bobot,
            jawabanUser: jawabanUser || '-',
            jawabanBenar: soal.jawabanBenar,
            benar: benar,
            skor: skorSoal,
            pembahasan: soal.pembahasan
        });
    });

    return {
        totalSkor: totalSkor,
        detail: detailJawaban
    };
}

/**
 * Tentukan status berdasarkan skor
 */
function tentukanStatus(skor) {
    return skor >= 75 ? 'lulus' : 'remedial';
}