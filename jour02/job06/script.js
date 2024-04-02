const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[current]) {
        current++;

        if (current === konamiCode.length) {
            activateKonami();
            current = 0;
        }
    } else {
        current = 0;
    }
});

function activateKonami() {
    document.body.style.backgroundColor = "#1B19CD"; // Changer la couleur de fond

    let logo = document.getElementById('laplateforme'); // Vérifier si le logo existe déjà
    if (!logo) {
        logo = document.createElement('img'); // Créer le logo si ce n'est pas le cas
        logo.id = 'laplateforme';
        logo.src = 'logo.png.webp'; 
        logo.style.width = '50%'; 
        logo.style.position = 'fixed';
        logo.style.top = '50%';
        logo.style.left = '50%';
        logo.style.transform = 'translate(-50%, -50%)'; // Centrer le logo précisément
        logo.style.maxWidth = '600px'; // Limiter la taille du logo
        logo.style.maxHeight = '600px';
        document.body.appendChild(logo);
    }
}
