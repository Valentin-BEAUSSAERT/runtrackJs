

document.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.querySelector('footer');

    window.onscroll = function() {
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let currentScroll = window.scrollY;
        let scrollPercentage = (currentScroll / maxScroll) * 100;

        // Calculer une couleur en fonction du pourcentage de défilement
        // Exemple : passer du noir au rouge
        footer.style.backgroundColor = `rgb(${scrollPercentage * 2.55}, 0, 0)`;
    };
});

