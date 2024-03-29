document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre directement
    
    // Ici, vous pouvez ajouter une vérification asynchrone, par exemple, via fetch()
    // Pour cet exemple, nous allons juste simuler une vérification
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Réinitialiser les messages d'erreur
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Vérification simple
    if (email.value === '' || !email.value.includes('@')) {
        emailError.textContent = 'Veuillez entrer un email valide.';
        return;
    }
    
    if (password.value.length < 8) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        return;
    }
    
    // Simuler une vérification asynchrone
    setTimeout(() => {
        alert('Connexion réussie!');
        // Ici, vous pourriez rediriger l'utilisateur ou recharger la page
    }, 1000);
});
