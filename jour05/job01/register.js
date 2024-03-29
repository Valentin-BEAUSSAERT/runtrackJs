document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simuler une vérification des champs (vous devriez avoir une vérification serveur en réalité)
    const fields = ['lastname', 'firstname', 'email', 'password', 'address', 'zipcode'];
    let isValid = true;
    
    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        error.textContent = ''; // Réinitialiser le message d'erreur
        
        if (input.value.trim() === '') {
            error.textContent = 'Ce champ est requis.';
            isValid = false;
        }
    });
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (email.value !== '' && !email.value.includes('@')) {
        emailError.textContent = 'Veuillez entrer un email valide.';
        isValid = false;
    }
    
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value !== '' && password.value.length < 8) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        isValid = false;
    }
    
    if (isValid) {
        setTimeout(() => {
            alert('Inscription réussie!');
            // Ici, traitement après inscription (par exemple, redirection)
        }, 1000);
    }
});
