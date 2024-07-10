        function loginUser() {
            // Ambil nilai input username
            var username = document.querySelector('input[type="text"]').value;
            
            // Ambil nilai input password
            var password = document.querySelector('input[type="password"]').value;
            
            // Contoh validasi sederhana, misalnya kedua input harus diisi
            if (username === '' || password === '') {
                alert('Silakan masukkan username dan password.');
                return;
            }
            
            // Contoh respons sementara
            alert('Login berhasil!'); // Ganti dengan logika sesuai kebutuhan
            
            // Simulasi pengiriman data ke server atau navigasi ke halaman berikutnya
            // Anda bisa mengganti window.location.href dengan URL halaman selanjutnya
            // yang ingin dituju setelah login berhasil
            window.location.href = 'dashboard.html';
        }

        function togglePasswordVisibility() {
            var passwordInput = document.getElementById("passwordInput");
            var toggleBtn = document.querySelector(".toggle-password");
        
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ganti ikon menjadi eye-slash ketika password terlihat
            } else {
                passwordInput.type = "password";
                toggleBtn.innerHTML = '<i class="fas fa-eye"></i>'; // Kembali ke ikon eye ketika password disembunyikan
            }
        }
        
        function loginUser() {
            // Logika validasi dapat ditambahkan di sini jika diperlukan
            // Setelah validasi berhasil, arahkan ke halaman ruangan.html
            window.location.href = 'ruangan.html';
        }