document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('filter-form');
    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const typeSelect = document.getElementById('type');
    const resultsDiv = document.getElementById('results');

    // Chargement initial des types dans la liste déroulante
    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const types = new Set();
            data.forEach(pokemon => {
                pokemon.type.forEach(type => types.add(type));
            });
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            });
        })
        .catch(e => {
            console.log('Erreur lors du chargement du fichier JSON', e);
        });

    // Fonction de filtrage et d'affichage des données
    function filterData() {
        const id = idInput.value;
        const name = nameInput.value.toLowerCase();
        const type = typeSelect.value;

        fetch('pokemon.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const filteredData = data.filter(pokemon => {
                    return (id === '' || pokemon.id === Number(id)) &&
                           (name === '' || pokemon.name.english.toLowerCase().includes(name)) &&
                           (type === '' || pokemon.type.includes(type));
                });

                displayResults(filteredData);
            })
            .catch(e => {
                console.log('Erreur lors du filtrage des données', e);
            });
    }

    // Fonction pour afficher les résultats
    function displayResults(data) {
        resultsDiv.innerHTML = ''; // Efface les résultats précédents
        const ul = document.createElement('ul');

        data.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = `${pokemon.name.english} (ID: ${pokemon.id}, Types: ${pokemon.type.join(', ')})`;
            ul.appendChild(li);
        });

        resultsDiv.appendChild(ul);
    }

    // Événement pour le bouton filtrer
    document.getElementById('filter').addEventListener('click', filterData);
});
