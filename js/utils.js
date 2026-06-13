/**
 * UTILITY FUNCTIONS
 */

const Utils = {
    getUser() {
        const userStr = localStorage.getItem(CONFIG.STORAGE.USER);
        return userStr ? JSON.parse(userStr) : null;
    },

    setUser(user) {
        localStorage.setItem(CONFIG.STORAGE.USER, JSON.stringify(user));
    },

    clearUser() {
        localStorage.removeItem(CONFIG.STORAGE.USER);
        localStorage.removeItem(CONFIG.STORAGE.PROGRESS);
        localStorage.removeItem(CONFIG.STORAGE.LEVEL);
    },

    isLoggedIn() {
        return this.getUser() !== null;
    },

    requireLogin() {
        if (!this.isLoggedIn()) {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    },

    logout() {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
            this.clearUser();
            window.location.href = 'index.html';
        }
    },

    getLevelFromScore(score) {
        if (score <= CONFIG.LEVEL.L1.max) return 1;
        if (score <= CONFIG.LEVEL.L2.max) return 2;
        return 3;
    },

    formatNumber(num, decimals = 1) {
        return num.toFixed(decimals).replace('.', ',');
    },

    mean(arr) {
        if (arr.length === 0) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    },

    simpanganRataRata(arr) {
        const xbar = this.mean(arr);
        const sumAbsDev = arr.reduce((sum, x) => sum + Math.abs(x - xbar), 0);
        return sumAbsDev / arr.length;
    },

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    shuffle(arr) {
        const result = [...arr];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    },

    showLoading(text = 'Memuat...') {
        const existing = document.getElementById('loading-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="spinner"></div>
            <div class="loading-text">${text}</div>
        `;
        document.body.appendChild(overlay);
    },

    hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.remove();
    },

    toast(message, type = 'info') {
        alert(message);
    },

    formatDate(date) {
        const d = new Date(date);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return d.toLocaleDateString('id-ID', options);
    },

    timestamp() {
        return new Date().toISOString();
    }
};