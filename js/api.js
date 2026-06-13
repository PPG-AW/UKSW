/**
 * API COMMUNICATION (JSONP)
 * Menggunakan JSONP untuk komunikasi dengan Google Apps Script
 * (Bypass CORS issue)
 */

const API = {
    _callbackCounter: 0,

    /**
     * Helper: Call API menggunakan JSONP
     */
    call(action, params = {}) {
        return new Promise((resolve, reject) => {
            const callbackName = `apiCallback_${++this._callbackCounter}_${Date.now()}`;

            // Buat function global untuk handle response
            window[callbackName] = function(data) {
                resolve(data);
                delete window[callbackName];
                const script = document.getElementById(callbackName + '_script');
                if (script) script.remove();
            };

            // Build URL
            const queryParams = new URLSearchParams({
                action: action,
                callback: callbackName,
                ...params
            });

            const url = `${CONFIG.API_URL}?${queryParams.toString()}`;

            // Buat script tag
            const script = document.createElement('script');
            script.id = callbackName + '_script';
            script.src = url;
            script.onerror = function() {
                reject(new Error('Gagal koneksi ke server'));
                delete window[callbackName];
                if (script.parentNode) script.remove();
            };

            document.head.appendChild(script);

            // Timeout 20 detik
            setTimeout(() => {
                if (window[callbackName]) {
                    reject(new Error('Request timeout (20 detik)'));
                    delete window[callbackName];
                    if (script.parentNode) script.remove();
                }
            }, 20000);
        });
    },

    // ===== API METHODS =====

    async ping() {
        return await this.call('ping');
    },

    async searchSiswa(query) {
        return await this.call('searchSiswa', { query });
    },

    async loginSiswa(siswaId) {
        return await this.call('loginSiswa', { siswaId });
    },

    async registerSiswa(nama, gayaBelajar) {
        return await this.call('registerSiswa', { nama, gayaBelajar });
    },

    async getProgress(siswaId) {
        return await this.call('getProgress', { siswaId });
    },

    async saveAsesmen(siswaId, jenis, skor, jawaban = '', catatan = '') {
        return await this.call('saveAsesmen', {
            siswaId, jenis, skor, jawaban, catatan
        });
    },
    async updateProgressFlag(siswaId, flag, value) {
        return await this.call('updateProgressFlag', {
            siswaId, flag, value: value ? 'true' : 'false'
        });
    },
    async saveRefleksi(siswaId, paham, bisaHitung, pahamKonteks, menikmati) {
        return await this.call('saveRefleksi', {
            siswaId, paham, bisaHitung, pahamKonteks, menikmati
        });
    },

    async getAllSiswa() {
        return await this.call('getAllSiswa');
    },

    async getDashboardGuru() {
        return await this.call('getDashboardGuru');
    }
};