/**
 * KONFIGURASI GLOBAL
 * Website Pembelajaran Simpangan Rata-Rata Data Tunggal
 */

const CONFIG = {
    // ===== APP INFO =====
    APP_NAME: 'Simpangan Rata-Rata',
    APP_SUBTITLE: 'Data Tunggal',
    APP_VERSION: '1.0.0',
    SCHOOL: 'SMK Negeri 1 Salatiga',
    CLASS: 'X Pemasaran',

    // ===== GOOGLE APPS SCRIPT URL =====
    API_URL: 'https://script.google.com/macros/s/AKfycbyrh-Dk7PpXBURNS6o2POCA0fkLUWiliLBoN6fWixqC_M2YKiVIGd-KBTXEWodcBZUbWw/exec',

    // ===== LEVELS =====
    LEVEL: {
        L1: { min: 0, max: 40, label: 'Level 1', desc: 'Perlu Penguatan Prasyarat' },
        L2: { min: 41, max: 70, label: 'Level 2', desc: 'Siap Materi Utama' },
        L3: { min: 71, max: 100, label: 'Level 3', desc: 'Siap Aplikasi Lanjutan' }
    },

    // ===== TARGET KELULUSAN =====
    PASSING_SCORE: 75,

    // ===== JUMLAH SOAL =====
    DIAGNOSTIC_COUNT: 5,
    FORMATIVE_COUNT: 10,

    // ===== STORAGE KEYS =====
    STORAGE: {
        USER: 'user_data',
        PROGRESS: 'user_progress',
        LEVEL: 'user_level'
    }
};

Object.freeze(CONFIG);