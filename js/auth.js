/**
 * AUTHENTICATION
 * Handle Login dan Register dengan API
 */

const Auth = {
    /**
     * Login siswa
     */
    async login(student) {
        Utils.showLoading('Memproses login...');

        try {
            const result = await API.loginSiswa(student.id);

            if (!result.success) {
                Utils.hideLoading();
                Utils.toast('Login gagal: ' + (result.error || 'Unknown error'));
                return false;
            }

            const userData = {
                id: result.data.id,
                nama: result.data.nama,
                gayaBelajar: result.data.gayaBelajar || 'visual',
                loginAt: Utils.timestamp()
            };

            Utils.setUser(userData);
            Utils.hideLoading();

            window.location.href = 'dashboard-siswa.html';
            return true;
        } catch (error) {
            Utils.hideLoading();
            Utils.toast('Error: ' + error.message);
            console.error('Login error:', error);
            return false;
        }
    },

    /**
     * Register siswa baru
     */
    async register(nama, gayaBelajar) {
        if (!nama || nama.trim().length < 3) {
            Utils.toast('Nama harus minimal 3 karakter');
            return false;
        }

        if (!gayaBelajar) {
            Utils.toast('Silakan pilih gaya belajar Anda');
            return false;
        }

        Utils.showLoading('Mendaftarkan akun...');

        try {
            const result = await API.registerSiswa(nama, gayaBelajar);

            if (!result.success) {
                Utils.hideLoading();
                Utils.toast('Pendaftaran gagal: ' + (result.error || 'Unknown error'));
                return false;
            }

            const userData = {
                id: result.data.id,
                nama: result.data.nama,
                gayaBelajar: result.data.gayaBelajar,
                loginAt: Utils.timestamp()
            };

            Utils.setUser(userData);
            Utils.hideLoading();

            window.location.href = 'dashboard-siswa.html';
            return true;
        } catch (error) {
            Utils.hideLoading();
            Utils.toast('Error: ' + error.message);
            console.error('Register error:', error);
            return false;
        }
    }
};