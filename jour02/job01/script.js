document.addEventListener('DOMContentLoaded', function() {
    // code pour attacher l'écouteur d'événements va ici
    document.getElementById("button").addEventListener("click", citation);

    function citation() {
        var contenuCitation = document.getElementById("citation").innerText;
        console.log(contenuCitation);
    }
});
