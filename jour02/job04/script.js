document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        // Vérifier si la touche pressée est une lettre (a-z)
        if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
            // Sélectionner le textarea
            var keylogger = document.getElementById("keylogger");
            
            // Si le focus n'est pas sur le textarea, ajouter la lettre
            if (document.activeElement !== keylogger) {
                keylogger.value += event.key;
                keylogger.value += event.key;
            }
        }
    });
});
