$(document).ready(function() {
    initializeGame();

    $('#restartButton').click(function() {
        initializeGame();
    });
});

function initializeGame() {
    const taquin = $('#taquin');
    taquin.empty();
    let tiles = [];
    for (let i = 1; i <= 8; i++) {
        tiles.push($(`<div class="tile"><img src="images/logo${i}.PNG" alt="Image ${i}"></div>`));
    }
    tiles.push($('<div class="tile empty"></div>')); // Case vide
    tiles.sort(() => Math.random() - 0.5); // Mélange simple

    tiles.forEach(tile => {
        taquin.append(tile);
    });

    $('.tile:not(.empty)').click(function() {
        moveTile(this);
    });
}

function moveTile(tile) {
    const emptyTile = $('.empty');
    const tileIndex = $(tile).index();
    const emptyIndex = $(emptyTile).index();

    const isAdjacent = (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / 3) === Math.floor(emptyIndex / 3)) || 
                        (Math.abs(tileIndex - emptyIndex) === 3 && Math.floor(tileIndex / 3) !== Math.floor(emptyIndex / 3));

    if (isAdjacent) {
        // On échange juste les positions de la tuile cliquée et de la tuile vide
        const tileImg = $(tile).children('img').detach();
        $(emptyTile).append(tileImg);
        $(emptyTile).removeClass('empty');
        $(tile).addClass('empty');

        // Une fois le déplacement effectué, réattribuer les gestionnaires d'événements click
        $('.tile:not(.empty)').off('click').click(function() {
            moveTile(this);
        });

        checkVictory();
    }
}


function checkVictory() {
    const tilesOrder = $('#taquin .tile:not(.empty) img').toArray().map(img => $(img).attr('src').match(/logo(\d)\.PNG$/)[1]);
    // Vérifie si les tuiles sont dans l'ordre de 1 à 8
    if (tilesOrder.join('') === '12345678') {
        $('#victoryMessage').text('Bravo ! Vous avez gagné.').css('color', 'green').show();
    }
}

