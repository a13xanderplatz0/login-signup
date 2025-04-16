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

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de toggle de contraseña
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    // Iterar sobre cada botón de toggle encontrado
    toggleButtons.forEach(button => {
        // Agregar evento click a cada botón
        button.addEventListener('click', function(e) {
            // Obtener el input de contraseña asociado usando data-target
            const passwordInput = document.getElementById(this.getAttribute('data-target'));
            
            // Cambiar el tipo de input entre password y texto
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                // Cambiar el ícono a ojo tachado
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                // Cambiar el ícono a ojo normal
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Verificar si estamos en la página de signup
    if (document.getElementById('signupForm')) {
        // Obtener el formulario de signup
        const signupForm = document.getElementById('signupForm');
        
        // Agregar evento submit al formulario
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío por defecto
            
            // Aquí puedes agregar la lógica de registro
            console.log('Formulario de registro enviado');
        });
    }

    // Verificar si estamos en la página de login
    if (document.getElementById('loginForm')) {
        // Obtener el formulario de login
        const loginForm = document.getElementById('loginForm');
        
        // Agregar evento submit al formulario
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío por defecto
            
            // Aquí puedes agregar la lógica de inicio de sesión
            console.log('Formulario de login enviado');
        });
    }
});