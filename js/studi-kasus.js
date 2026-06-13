/**
 * STUDI KASUS PENGAYAAN
 * 3 kasus aplikatif untuk siswa yang lulus formatif
 */

const STUDI_KASUS = [
    {
        id: 1,
        judul: 'Evaluasi 3 Cabang Toko Retail',
        konteks: 'Anda adalah analis pemasaran di perusahaan retail yang memiliki 3 cabang. Manajemen meminta Anda merekomendasikan cabang mana yang perlu evaluasi mendalam.',
        data: [
            { label: 'Cabang Bandung', values: [80, 82, 78, 81, 79], unit: 'juta' },
            { label: 'Cabang Surabaya', values: [60, 95, 70, 90, 65], unit: 'juta' },
            { label: 'Cabang Yogyakarta', values: [75, 78, 82, 80, 85], unit: 'juta' }
        ],
        pertanyaan: [
            'Hitung rata-rata dan SR untuk masing-masing cabang.',
            'Cabang mana yang paling konsisten? Mengapa?',
            'Cabang mana yang perlu evaluasi mendalam? Berikan minimal 2 alasan.',
            'Apa rekomendasi konkret yang akan Anda berikan kepada manajemen?'
        ]
    },
    {
        id: 2,
        judul: 'Analisis Kinerja 2 Tim Sales',
        konteks: 'Sebagai supervisor sales, Anda mengevaluasi kinerja 2 tim selama 5 hari kerja terakhir. Manajer ingin tahu tim mana yang lebih baik untuk dipromosikan ke proyek baru.',
        data: [
            { label: 'Tim Alpha', values: [20, 22, 18, 21, 19], unit: 'unit closing' },
            { label: 'Tim Beta', values: [15, 28, 12, 25, 20], unit: 'unit closing' }
        ],
        pertanyaan: [
            'Hitung rata-rata dan SR untuk masing-masing tim.',
            'Tim mana yang lebih cocok untuk proyek baru yang membutuhkan stabilitas? Jelaskan.',
            'Apa keunggulan dan kelemahan masing-masing tim berdasarkan data?',
            'Strategi pengembangan apa yang cocok untuk masing-masing tim?'
        ]
    },
    {
        id: 3,
        judul: 'Analisis Kepuasan 2 Produk',
        konteks: 'Tim riset pasar mengumpulkan skor kepuasan pelanggan untuk 2 produk (skala 1-10). Anda diminta menganalisis untuk strategi pemasaran selanjutnya.',
        data: [
            { label: 'Produk Premium', values: [8, 9, 7, 8, 9, 8], unit: 'skor' },
            { label: 'Produk Reguler', values: [5, 9, 6, 10, 7, 8], unit: 'skor' }
        ],
        pertanyaan: [
            'Hitung rata-rata dan SR skor untuk masing-masing produk.',
            'Produk mana yang mendapat kepuasan lebih konsisten?',
            'Apa makna SR tinggi pada produk reguler dalam konteks kepuasan pelanggan?',
            'Strategi pemasaran apa yang cocok untuk masing-masing produk?'
        ]
    }
];

/**
 * Hitung SR untuk dataset studi kasus
 */
function hitungSRDataset(values) {
    const n = values.length;
    const mean = values.reduce((a, b) => a + b, 0) / n;
    const mutlak = values.map(v => Math.abs(v - mean));
    const jumlah = mutlak.reduce((a, b) => a + b, 0);
    const sr = jumlah / n;
    return {
        mean: Math.round(mean * 100) / 100,
        sr: Math.round(sr * 100) / 100,
        jumlahMutlak: jumlah
    };
}