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
    document.body.style.backgroundColor = "#1B19CD"; // Exemple de bleu outremer

    let logo = document.getElementById('laplateforme');
    if (!logo) {
        logo = document.createElement('img');
        logo.id = 'laplateforme';
        logo.src = 'logo.png.webp'; // Assurez-vous que le chemin est correct
        logo.style.width = '50%'; // Agrandir le logo
        logo.style.position = 'fixed';
        logo.style.top = '50%';
        logo.style.left = '50%';
        logo.style.transform = 'translate(-50%, -50%)'; // Centrer le logo précisément
        logo.style.maxWidth = '600px'; // Limiter la taille maximale pour éviter qu'il soit trop grand
        logo.style.maxHeight = '600px';
        document.body.appendChild(logo);
    }

    // Ajouter d'autres modifications de style si nécessaire
}
