$(document).ready(function() {
    $("#shuffleButton").click(function() {
        var images = $("#rainbow img").get();
        images.sort(function() { return 0.5 - Math.random(); }); // Mélange simple
        $("#rainbow").empty().append(images);
    });

    var firstClickedImg = null;
    // Utilise la délégation d'événements pour gérer le clic sur les images
    $("#rainbow").on("click", "img", function() {
        if (!firstClickedImg) {
            firstClickedImg = this; // Stocke la première image cliquée
        } else {
            // Échange les sources des images au lieu de remplacer les éléments
            var secondClickedImgSrc = $(this).attr("src");
            $(this).attr("src", $(firstClickedImg).attr("src"));
            $(firstClickedImg).attr("src", secondClickedImgSrc);
            firstClickedImg = null; // Réinitialise pour le prochain clic

            // Vérifie l'ordre après chaque échange
            checkOrder();
        }
    });

    function checkOrder() {
        // Vérifie si les sources des images correspondent à l'ordre arc1, arc2, arc3, etc.
        var isCorrect = true;
        $("#rainbow img").each(function(index) {
            if (!$(this).attr("src").includes("arc" + (index + 1))) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            $("#resultMessage").text("Vous avez gagné").css("color", "green");
        } else {
            $("#resultMessage").text("Vous avez perdu").css("color", "red");
        }
    }
});
