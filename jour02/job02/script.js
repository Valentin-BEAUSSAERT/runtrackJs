document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("button").addEventListener("click", showhide);
});

function showhide() {
    var existingArticle = document.getElementById("new-citation");
    // Si un nouvel article a déjà été ajouté, le supprimer
    if (existingArticle) {
        existingArticle.remove();
    } else {
        // Sinon, créer un nouvel article avec la nouvelle citation et l'ajouter au document
        var newArticle = document.createElement("article");
        newArticle.id = "new-citation";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle); // Ajouter l'article au body du document
    }
}

