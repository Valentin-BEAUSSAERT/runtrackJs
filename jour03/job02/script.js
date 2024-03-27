$(document).ready(function() {
    // Gère le clic sur le bouton "Afficher le texte"
    $("#showButton").click(function() {
        $("#message").show();
    });

    // Gère le clic sur le bouton "Masquer le texte"
    $("#hideButton").click(function() {
        $("#message").hide();
    });
});
