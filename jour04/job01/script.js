document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');

    button.addEventListener('click', function() {
        fetch('expression.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du fichier');
                }
                return response.text();
            })
            .then(text => {
                const p = document.createElement('p');
                p.textContent = text;
                document.body.appendChild(p);
            })
            .catch(error => {
                console.error('Erreur :', error);
            });
    });
});
