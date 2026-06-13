/**
 * BANK SOAL REMEDIAL
 * 5 soal re-test untuk siswa yang belum lulus formatif
 * Soal berbeda dari formatif, tetapi mengukur kompetensi yang sama
 */

const SOAL_REMEDIAL = [
    {
        id: 1,
        topik: 'Hitung Rata-rata',
        bobot: 20,
        pertanyaan: 'Data penjualan harian: 10, 15, 20, 25, 30. Berapa rata-ratanya?',
        pilihan: [
            { label: 'A', teks: '15' },
            { label: 'B', teks: '20' },
            { label: 'C', teks: '25' },
            { label: 'D', teks: '100' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Rata-rata = (10+15+20+25+30)/5 = 100/5 = 20.'
    },
    {
        id: 2,
        topik: 'Nilai Mutlak',
        bobot: 20,
        pertanyaan: 'Hasil dari |3 - 8| adalah ...',
        pilihan: [
            { label: 'A', teks: '-5' },
            { label: 'B', teks: '5' },
            { label: 'C', teks: '11' },
            { label: 'D', teks: '0' }
        ],
        jawabanBenar: 'B',
        pembahasan: '3 - 8 = -5, kemudian |-5| = 5 (nilai mutlak selalu positif).'
    },
    {
        id: 3,
        topik: 'Hitung SR Sederhana',
        bobot: 20,
        pertanyaan: 'Data: 2, 4, 6, 8, 10. Berapa simpangan rata-ratanya?',
        pilihan: [
            { label: 'A', teks: '1,6' },
            { label: 'B', teks: '2,0' },
            { label: 'C', teks: '2,4' },
            { label: 'D', teks: '3,0' }
        ],
        jawabanBenar: 'C',
        pembahasan: 'x̄=6. Mutlak: 4,2,0,2,4. Jumlah=12. SR = 12/5 = 2,4.'
    },
    {
        id: 4,
        topik: 'Interpretasi SR',
        bobot: 20,
        pertanyaan: 'Toko A: SR=0,8 juta. Toko B: SR=3,5 juta. Toko mana lebih konsisten?',
        pilihan: [
            { label: 'A', teks: 'Toko A, karena SR-nya kecil' },
            { label: 'B', teks: 'Toko B, karena SR-nya besar' },
            { label: 'C', teks: 'Sama saja' },
            { label: 'D', teks: 'Tidak bisa ditentukan' }
        ],
        jawabanBenar: 'A',
        pembahasan: 'SR kecil = data mengumpul = lebih konsisten. Toko A lebih konsisten.'
    },
    {
        id: 5,
        topik: 'Aplikasi Bisnis',
        bobot: 20,
        pertanyaan: 'Sebagai manajer pemasaran, jika tim A punya SR penjualan 5 juta dan tim B punya SR 1 juta, tim mana yang lebih bisa diandalkan?',
        pilihan: [
            { label: 'A', teks: 'Tim A, karena variasinya besar' },
            { label: 'B', teks: 'Tim B, karena lebih konsisten' },
            { label: 'C', teks: 'Tim A, karena lebih dinamis' },
            { label: 'D', teks: 'Tergantung rata-ratanya' }
        ],
        jawabanBenar: 'B',
        pembahasan: 'Tim B lebih konsisten (SR kecil), lebih bisa diandalkan untuk target.'
    }
];

function hitungSkorRemedial(jawabanSiswa) {
    let totalSkor = 0;
    const detail = [];

    SOAL_REMEDIAL.forEach((soal, i) => {
        const jawaban = jawabanSiswa[i];
        const benar = jawaban === soal.jawabanBenar;
        const skor = benar ? soal.bobot : 0;
        totalSkor += skor;

        detail.push({
            soalId: soal.id,
            topik: soal.topik,
            bobot: soal.bobot,
            jawabanUser: jawaban || '-',
            jawabanBenar: soal.jawabanBenar,
            benar: benar,
            pembahasan: soal.pembahasan
        });
    });

    return { totalSkor, detail };
}