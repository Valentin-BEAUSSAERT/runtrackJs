$(document).ready(function() {
    initializeGame();

    $('#restartButton').click(function() {
        initializeGame();
    });
});

function initializeGame() {
    const taquin = $('#taquin'); // Corrigez cet ID pour correspondre à votre HTML
    taquin.empty();
    let tileIndices = [...Array(9).keys()]; // Créer un tableau de 0 à 8
    tileIndices.sort(() => Math.random() - 0.5); // Mélanger les indices

    tileIndices.forEach(index => {
        // Si l'indice est 8, nous créons la case vide
        const tileClass = index === 8 ? "tile empty" : "tile";
        const backgroundPosition = getBackgroundPosition(index);
        // Ajouter la div de la tuile avec le style d'arrière-plan approprié
        taquin.append(`<div class="${tileClass}" style="background-position: ${backgroundPosition.x}px ${backgroundPosition.y}px;"></div>`);
    });

    $('.tile:not(.empty)').click(function() {
        moveTile(this);
    });
}

// Le reste de vos fonctions JavaScript reste le même...


function getBackgroundPosition(index) {
    // Calculer la position x, y pour l'arrière-plan en fonction de l'indice de la tuile
    const row = Math.floor(index / 3);
    const col = index % 3;
    return { x: col * -100, y: row * -100 };
}

function moveTile(tile) {
    const emptyTile = $('.empty');
    const tileIndex = $(tile).index();
    const emptyIndex = $(emptyTile).index();

    const isAdjacent = (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / 3) === Math.floor(emptyIndex / 3)) || 
                        (Math.abs(tileIndex - emptyIndex) === 3 && Math.floor(tileIndex / 3) !== Math.floor(emptyIndex / 3));

    if (isAdjacent) {
        // On échange les styles d'arrière-plan entre la tuile cliquée et la tuile vide
        const tileBackground = $(tile).css('background-position');
        const emptyBackground = $(emptyTile).css('background-position');
        $(tile).css('background-position', emptyBackground);
        $(emptyTile).css('background-position', tileBackground);

        // On échange les classes entre la tuile cliquée et la tuile vide
        $(tile).toggleClass('empty');
        $(emptyTile).toggleClass('empty');

        checkVictory();
    }
}

function checkVictory() {
    // On récupère les positions d'arrière-plan de toutes les tuiles sauf la vide
    const tilesOrder = $('#taquin .tile:not(.empty)').toArray().map(tile => {
        return $(tile).css('background-position');
    });

    // Convertir les positions en une chaîne de caractères ordonnée pour comparer avec l'ordre de victoire
    const victoryOrder = '0px 0px,-100px 0px,-200px 0px,0px -100px,-100px -100px,-200px -100px,0px -200px,-100px -200px';
    if (tilesOrder.join(',') === victoryOrder) {
        $('#victoryMessage').text('Bravo ! Vous avez gagné.').css('color', 'green').show();
    }
}

// Vous devez inclure le code CSS fourni précédemment pour que cela fonctionne correctement.
