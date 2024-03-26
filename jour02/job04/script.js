document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et le paragraphe par leurs IDs
    var bouton = document.getElementById("button");
    var compteur = document.getElementById("compteur");

    // Ajouter un écouteur d'événements de type 'click' au bouton
    bouton.addEventListener("click", function() {
        // À chaque clic, convertir le texte du paragraphe en nombre et l'incrémenter de 1
        var nombreDeClics = parseInt(compteur.textContent, 10);
        nombreDeClics += 1;
        compteur.textContent = nombreDeClics; // Mettre à jour le texte du paragraphe avec la nouvelle valeur
    });
});
