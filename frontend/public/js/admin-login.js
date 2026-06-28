// Toggle Password Visibility
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Add loading state to button on submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function() {
            const btn = this.querySelector('.btn-submit');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.8';
            }
        });
    }
});
