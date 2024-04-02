document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simuler une vérification des champs 
    const fields = ['lastname', 'firstname', 'email', 'password', 'address', 'zipcode'];
    let isValid = true;
    
    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + 'Error');
        error.textContent = ''; // Réinitialiser le message d'erreur
        
        if (input.value.trim() === '') {
            error.textContent = 'Ce champ est requis.'; // Afficher un message d'erreur si le champ est vide
            isValid = false;
        }
    });
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');// Vérifier si l'email contient un @
    if (email.value !== '' && !email.value.includes('@')) {
        emailError.textContent = 'Veuillez entrer un email valide.';
        isValid = false;
    }
    
    const password = document.getElementById('password'); // Vérifier si le mot de passe contient au moins 8 caractères
    const passwordError = document.getElementById('passwordError'); // Afficher un message d'erreur si ce n'est pas le cas
    if (password.value !== '' && password.value.length < 8) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        isValid = false;
    }
    
    if (isValid) {
        setTimeout(() => {
            alert('Inscription réussie!');
            // Remplacer le message d'alerte par une redirection vers une autre page
        }, 1000);
    }
});
