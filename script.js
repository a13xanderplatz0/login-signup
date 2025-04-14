// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    console.log('Login attempt:', { username, password, remember });
    // Here you would typically send this data to your server
    alert('Login functionality would be implemented here');
});

// Signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('signup-password').value;
    const remember = document.getElementById('signup-remember').checked;
    
    console.log('Signup attempt:', { email, password, remember });
    // Here you would typically send this data to your server
    alert('Signup functionality would be implemented here');
});

/* filepath: /home/a13xanderplatz/Documentos/dbp/script.js */
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = document.getElementById(icon.dataset.target);
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Obtener el input de contraseña asociado
            const passwordInput = document.getElementById(this.getAttribute('data-target'));
            
            // Cambiar el tipo de input
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el ícono del ojo y el campo de contraseña
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#signup-password');

    // Verificar que ambos elementos existan
    if (togglePassword && passwordField) {
        // Agregar el evento click al ícono
        togglePassword.addEventListener('click', () => {
            // Cambiar el tipo de input
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Cambiar el ícono
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
});